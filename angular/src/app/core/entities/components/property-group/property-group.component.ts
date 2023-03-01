import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Property, PropertyDataTypes, PropertyFormType, PropertyGroup } from '../../interfaces';
import { PropertyGroupService, PropertyService } from '../../services';

@Component({
  selector: 'app-property-group',
  templateUrl: './property-group.component.html'
})
export class PropertyGroupComponent {
  isLoading: boolean = false;
  
  @Input() propertyGroup!: PropertyGroup;

  @Output()
  delete = new EventEmitter();

  edit: boolean = false;

  entityGroupForm!: FormGroup;

  constructor(
    private propertyGroupService: PropertyGroupService,
    private propertyService: PropertyService
  ){}

  ngOnInit(): void {
    this.entityGroupForm = new FormGroup({
      name: new FormControl(this.propertyGroup?.name, [Validators.required]),
    });
  }

  onSave(): void {
    if ( this.entityGroupForm.valid ) {
      this.isLoading = true;
      this.propertyGroupService.updatePropertyGroup(this.propertyGroup.id, this.entityGroupForm.value as PropertyGroup)
      .subscribe({
        next: (result) => { 
          this.propertyGroup = result;
        },
        error: (err) => { 
          console.log(err); 
          this.completeLoading();
        },
        complete: () => { 
          this.completeLoading();
        },
      });
    }
  }

  onDelete(): void {
    if ( confirm('Вы уверены?') ) {
      this.propertyGroupService.deletePropertyGroup(this.propertyGroup.id)
      .subscribe({
        next: () => {},
        error: (err) => {
          console.log(err); 
          this.completeLoading();
        },
        complete: () => {
          this.delete.emit();
          this.completeLoading();
        }
      });
    }
  }
  
  completeLoading(): void{
    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  }
}
