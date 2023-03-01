import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EntityType } from '../../interfaces';
import { EntityTypeService } from '../../services';

@Component({
  selector: 'app-entity-types',
  templateUrl: './entity-types.component.html',
  styleUrls: ['./entity-types.component.css']
})
export class EntityTypesComponent
{
  title: string = 'Загружается';
  isLoading: boolean = false;
  dataSource = new MatTableDataSource<EntityType>();

  constructor(
    private entityTypeService: EntityTypeService
  ){}

  ngOnInit(): void {
    this.getEntityTypes();
  }

  getEntityTypes(): void {
    this.isLoading = true;
    this.entityTypeService.getEntityTypes()
      .subscribe({
        next: entityTypes => this.dataSource.data = entityTypes,
        error: (err) => {
          console.log(err);
          this.completeLoading();
        },
        complete: () => {
          this.completeLoading();
        }
      });
  }

  onDeleteSelected(ids: number[]): void {
    this.isLoading = true;
    ids.forEach(id => {
      this.entityTypeService.deleteEntityType(+id)
        .subscribe({
          next: (result) => {
            console.log(result);
          },
          error: (err) => {
            console.log(err);
            this.completeLoading();
          },
          complete: () => {
            this.getEntityTypes();
            this.completeLoading();
          }
        });
    });
  }

  completeLoading(){
    setTimeout(()=>this.isLoading = false, 300);
  }

}