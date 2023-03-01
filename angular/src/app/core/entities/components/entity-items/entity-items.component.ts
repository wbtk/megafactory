import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EntityItem } from '../../interfaces';
import { EntityItemService } from '../../services';

@Component({
  selector: 'app-entity-items',
  templateUrl: './entity-items.component.html'
})
export class EntityItemsComponent {
  isLoading: boolean = false;
  @Input() entityTypeId!: number;
  entityItems = new MatTableDataSource<EntityItem>();
  selection = new SelectionModel<EntityItem>(true, []);
  displayedColumns: string[] = ['select', 'id', 'name', 'sort', 'actions'];
  search: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private entityItemService: EntityItemService
  ){}

  ngOnInit(): void {
    this.getEntityTypeElemets();
  }

  ngAfterViewInit(): void {
    this.entityItems.paginator = this.paginator;
    this.entityItems.sort = this.sort;
  }

  getEntityTypeElemets(): void {
    this.entityItemService.getEntityItems(this.entityTypeId)
      .subscribe({
        next: (response) => {
          this.entityItems.data = response;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          
        }
      });
  }

  onDelete(element: EntityItem): void {
    if(confirm('Вы уверены?')){
      this.selection.select(element);
      this.onDeleteSelected();
    }
  }

  onDeleteSelected(): void {
    this.isLoading = true;

    const ids = this.selection.selected.map(item => item.id);
    this.selection.clear();

    ids.forEach(id => {
      this.entityItemService.deleteEntityItem(+id)
        .subscribe({
          next: (result) => {
            console.log(result);
          },
          error: (err) => {
            console.log(err);
            this.completeLoading();
          },
          complete: () => {
            this.getEntityTypeElemets();
            this.completeLoading();
          },
        });
    });
  }

  applyFilter() {
    const filterValue = this.search;
    this.entityItems.filter = filterValue.trim().toLowerCase();

    if (this.entityItems.paginator) {
      this.entityItems.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.entityItems.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.entityItems.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: EntityItem): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  completeLoading(){
    setTimeout(()=>this.isLoading = false, 300);
  }

}
