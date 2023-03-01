import { Component, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { EntityItem, EntitySection, EntityType, Property, PropertyGroup } from 'src/app/core/entities';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html'
})
export class EntityListComponent implements AfterViewInit {

  @Input() dataSource = new MatTableDataSource<EntityType|EntitySection|EntityItem|PropertyGroup|Property>()
  @Input() linkToEntity!: string;
  @Input() linkToCreateEntity!: string;
  @Input() displayedColumns: string[] = ['select', 'id', 'name', 'sort', 'actions'];
  search: string = '';
  selection = new SelectionModel<EntityType|EntitySection|EntityItem|PropertyGroup|Property>(true, []);
 
  @Output()
  deleteSelected: EventEmitter<number[]> = new EventEmitter<number[]>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter() {
    const filterValue = this.search;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: EntityType|EntitySection|EntityItem|PropertyGroup|Property): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  onDelete(element: EntityType|EntitySection|EntityItem|PropertyGroup|Property): void {
    if(confirm('Вы уверены?')){
      this.selection.select(element);
      this.onDeleteSelected();
    }
  }

  onDeleteSelected(): void{
    if(confirm('Вы уверены?')){
      if (this.selection.selected.length) {
        const ids = this.selection.selected.map(item => item.id);
        this.deleteSelected.emit(ids);
        this.selection.clear();
      }
    }
  }

}