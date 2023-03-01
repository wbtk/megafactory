import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityItem } from '../../../interfaces';
import { EntityItemService } from '../../../services';

@Component({
  selector: 'app-entity-item-form-create',
  templateUrl: './entity-item-form-create.component.html'
})
export class EntityItemFormCreateComponent {
  isLoading: boolean = false;

  entityTypeId: number = parseInt(this.route.snapshot.paramMap.get('entityTypeId')!, 10);

  constructor(
    private readonly entityItemService: EntityItemService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ){
  }

  ngOnInit(): void {}

  entityItemForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    entityTypeId: new FormControl(this.entityTypeId, [Validators.required])
  });

  get name(): AbstractControl | null {
    return this.entityItemForm.get('name');
  }

  onSubmit(): void{
    if (this.entityItemForm.valid) {
      this.isLoading = true;
      let newEntityItem: EntityItem;
      this.entityItemService.createEntityItem(this.entityItemForm.value as EntityItem)
        .subscribe({
          next: (response) => {
            newEntityItem = response
          },
          error: (err) => {
            console.log(err);
            this.isLoading = false;
          },
          complete: () => {
            setTimeout(() => {
              this.router.navigate(
                [this.route.snapshot.queryParams['redirect'] || '/core/entities/entity-type/'+ this.entityTypeId +'/entity-item/edit/' + newEntityItem.id],
                { replaceUrl: true }
              );
              this.isLoading = false;
            }, 300);
          },
        });
    }
  }
}
