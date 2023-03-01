import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EntityType } from '../../interfaces';
import { EntityTypeService } from '../../services';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-entity-type',
  templateUrl: './entity-type.component.html'
})
export class EntityTypeComponent {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  entityType: BehaviorSubject<EntityType> = new BehaviorSubject(<EntityType>{});
  
  title: string = 'Загружается';

  constructor(
    private entityTypeService: EntityTypeService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void {
    this.getEntityType();
  }

  getEntityType(): void {
    this.isLoading$.next(true);
    const entityTypeId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    if (entityTypeId) {
      this.entityTypeService.getEntityType(entityTypeId)
      .subscribe({
        next: (entityType) => {
          this.entityType.next(entityType);
        },
        error: (err) => {
          console.log(err);
          this.completeLoading();
        },
        complete: () => {
          this.completeLoading();
        }
      });
    } else {
      this.completeLoading();
    }
  }

  completeLoading(): void {
    setTimeout(() => {
      this.setPageTitle();
      this.isLoading$.next(false);
    }, 300);
  }

  setPageTitle(): void {
    if ( this.entityType.value.id ) {
      this.title = this.entityType.value.name;
    } else {
      this.title = 'Создание справочника';
    }
  }

  goBack(): void {
    this.location.back();
  }

  onDeleteSelected(ids: number[]): void {
    
  }
}
