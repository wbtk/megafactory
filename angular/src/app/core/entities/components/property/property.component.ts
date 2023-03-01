import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Property } from '../../interfaces';
import { PropertyService } from '../../services';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html'
})
export class PropertyComponent {
  isLoading: boolean = false;
  panelOpenState: boolean = false;
  propertyForm!: FormGroup;
  @Input() 
  property!: Property;
  @Output() 
  delete = new EventEmitter();

  constructor(
    private propertyService: PropertyService
    ){}

  ngOnInit(){
    this.setDataToForm();
  }

  setDataToForm(){
    this.propertyForm = new FormGroup({
      name: new FormControl(this.property?.name, [Validators.required]),
      description: new FormControl(this.property?.description),
      dataType: new FormControl(this.property?.dataType[0], [Validators.required]),
      formType: new FormControl(this.property?.formType[0], [Validators.required]),
      relationTypeId: new FormControl(this.property?.relationTypeId),
      options: new FormControl(this.property?.options),
      json: new FormControl(this.property?.json),
      sort: new FormControl(this.property?.sort),
      active: new FormControl(this.property?.active),
      required: new FormControl(this.property?.required),
      visible: new FormControl(this.property?.visible),
      searchable: new FormControl(this.property?.searchable),
      sortable: new FormControl(this.property?.sortable),
      multiple: new FormControl(this.property?.multiple)
    });
  }

  onSubmit(){
    if ( this.propertyForm?.valid ) {
      this.isLoading = true;

      if ( this.property?.id ) {
        this.propertyService.updateProperty(this.property.id, this.propertyForm.value as Property)
        .subscribe({
          next: (result) => {
            this.property = result;
          },
          error: (err) => {
            console.log(err);
            setTimeout(() => {
              this.isLoading = false;
            }, 300);
          },
          complete: () => {
            this.setDataToForm();
            setTimeout(() => {
              this.isLoading = false;
            }, 300);
          },
        });
      }
    }
  }

  onDelete(){
    if ( confirm('Вы уверены?') ) {
      this.isLoading = true;
      this.propertyService.deleteProperty(this.property.id)
        .subscribe({
          next: () => {},
          error: (err) => {
            console.log(err);
            this.isLoading = false;
          },
          complete: () => {
            this.delete.emit();
            this.isLoading = false;
          }
        });
    }
  }
}
