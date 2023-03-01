import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EntityItem } from '../../../interfaces';
import { EntityItemService } from '../../../services';

@Component({
  selector: 'app-entity-item-form-update',
  templateUrl: './entity-item-form-update.component.html'
})
export class EntityItemFormUpdateComponent {
  @Input() entityItem!: EntityItem;
  entityItemForm!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private readonly entityItemService: EntityItemService,
    private route: ActivatedRoute
  ){
  }

  ngOnInit(): void {
    this.entityItemForm = new FormGroup({
      name: new FormControl(this.entityItem?.name, [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.entityItemForm.valid) {
      this.isLoading = true;
      const entityItemId = parseInt(this.route.snapshot.paramMap.get('entityItemId')!, 10);
      if ( entityItemId ){
        this.entityItemService.updateEntityItem(entityItemId, this.entityItemForm.value as EntityItem)
        .subscribe({
          next: (entityItem) => {
            this.entityItem = entityItem;
          },
          error: (err) => {
            console.log(err);
            this.completeLoading();
          },
          complete: () => {
            this.completeLoading();
          },
        });
      } else {
        this.completeLoading();
      }
    }
  }

  completeLoading(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  }
}
