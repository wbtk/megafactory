import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EntityType } from '../../../interfaces';
import { EntityTypeService } from '../../../services';

@Component({
  selector: 'app-entity-type-form-update',
  templateUrl: './entity-type-form-update.component.html'
})
export class EntityTypeFormUpdateComponent {
  isLoading: boolean = false;
  entityTypeForm!: FormGroup;
  @Input() entityType?: EntityType;

  constructor(
    private readonly entityTypeService: EntityTypeService,
    private route: ActivatedRoute
  ){
  }

  ngOnInit(): void {
    this.entityTypeForm = new FormGroup({
      name: new FormControl(this.entityType?.name, [Validators.required]),
    });
  }

  get name(): AbstractControl | null {
    return this.entityTypeForm.get('name');
  }

  onSubmit(): void {
    if (this.entityTypeForm.valid) {
      this.isLoading = true;
      const entityTypeId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
      if ( entityTypeId ){
        this.entityTypeService.updateEntityType(entityTypeId, this.entityTypeForm.value as EntityType)
        .subscribe({
          next: (entityType) => {
            this.entityType = entityType;
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

  completeLoading(): void{
    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  }

}
