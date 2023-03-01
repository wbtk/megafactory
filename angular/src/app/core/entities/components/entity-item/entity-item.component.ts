import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EntityItem } from '../../interfaces';
import { EntityItemService } from '../../services';

@Component({
  selector: 'app-entity-item',
  templateUrl: './entity-item.component.html'
})
export class EntityItemComponent {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  entityItem: BehaviorSubject<EntityItem> = new BehaviorSubject(<EntityItem>{});
  title: string = 'Загружается';

  constructor(
    private entityItemService: EntityItemService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getEntityItem();
  }

  getEntityItem(): void {
    this.isLoading$.next(true);
    const entityItemId = parseInt(this.route.snapshot.paramMap.get('entityItemId')!, 10);
    if (entityItemId) {
      this.entityItemService.getEntityItem(entityItemId)
      .subscribe({
        next: (entityItem) => {
          this.entityItem.next(entityItem);
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
    if ( this.entityItem.value.id ) {
      this.title = this.entityItem.value.name;
    } else {
      this.title = 'Создание элемента справочника';
    }
  }

}
