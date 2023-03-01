import { Component, Input, ViewChild } from '@angular/core';
import { Property, PropertyDataTypes, PropertyFormType } from '../../interfaces';
import { PropertyService } from '../../services';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {
  
  isLoading: boolean = false;

  @Input() propertyGroupId!: number;

  properties?: Property[];

  constructor(
    private propertyService: PropertyService
  ){}

  ngOnInit(){
    this.loadProperties();
  }

  loadProperties(){
    this.isLoading = true;
    this.propertyService.getProperties(this.propertyGroupId)
      .subscribe({
        next: (result) => {
          this.properties = result;
        },
        error: (err) => {
          console.log(err);
          return err;
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  createProperty(): void {
    const data = <Property>{
      propertyGroupId: this.propertyGroupId,
      name: 'Новое поле',
      dataType: Object.keys(PropertyDataTypes)[0],
      formType: Object.keys(PropertyFormType)[0]
    }
    this.propertyService.createProperty(data)
      .subscribe({
        next: () => {},
        error: () => {},
        complete: () => {
          this.loadProperties();
        }
      });
  }

  onDelete(): void {
    this.ngOnInit();
  }
  
}
