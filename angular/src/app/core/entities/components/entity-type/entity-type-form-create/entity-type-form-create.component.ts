import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityType } from '../../../interfaces';
import { EntityTypeService } from '../../../services';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-entity-type-form-create',
  templateUrl: './entity-type-form-create.component.html'
})
export class EntityTypeFormCreateComponent {

  isLoading: boolean = false;

  entityTypeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required])
  });

  constructor(
    private readonly entityTypeService: EntityTypeService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ){
  }

  get name(): AbstractControl | null {
    return this.entityTypeForm.get('name');
  }

  onSubmit(): void{
    if (this.entityTypeForm.valid) {
      this.isLoading = true;
      let newEntityType: EntityType;
      this.entityTypeService.createEntityType(this.entityTypeForm.value as EntityType)
        .subscribe({
          next: (result) => {
            newEntityType = result
          },
          error: (err) => {
            console.log(err);
            this.isLoading = false;
          },
          complete: () => {
            setTimeout(() => {
              this._router.navigate(
                [this._route.snapshot.queryParams['redirect'] || '/core/entities/entity-type/edit/' + newEntityType.id],
                { replaceUrl: true }
              );
              this.isLoading = false;
            }, 300);
          },
        });
    }
  }

}
