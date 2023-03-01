import { Component, Input } from '@angular/core';
import { EntityItem, EntitySection, EntityType, PropertyGroup } from '../../interfaces';
import { PropertyGroupService } from '../../services';

@Component({
  selector: 'app-property-groups',
  templateUrl: './property-groups.component.html'
})
export class PropertyGroupsComponent {
  @Input() entityTypeId?: number;
  @Input() entitySectionId?: number;
  @Input() entityItemId?: number;

  propertyGroups?: PropertyGroup[];

  isLoading: boolean = false;

  constructor(
    private propertyGroupService: PropertyGroupService
  ){}

  ngOnInit(): void {
    if ( this.entityTypeId ) {
      this.getPropertyGroupsByEntityTypeId(this.entityTypeId);
    }
    if ( this.entitySectionId ) {
      this.getPropertyGroupsByEntitySectionId(this.entitySectionId);
    }
    if ( this.entityItemId ) {
      this.getPropertyGroupsByEntityItemId(this.entityItemId);
    }
  }

  getPropertyGroupsByEntityTypeId(entityTypeId: number): void {
    this.isLoading = true;
    this.propertyGroupService.getPropertyGroupsByEntityType(entityTypeId)
      .subscribe({
        next: (result) => {this.propertyGroups = result},
        error: (err) => {console.log(err); this.isLoading = false;},
        complete: () => {this.isLoading = false;}
      });
  }

  getPropertyGroupsByEntitySectionId(entitySectionId: number): void {
    this.isLoading = true;
    this.propertyGroupService.getPropertyGroupsByEntitySection(entitySectionId)
      .subscribe({
        next: (result) => {this.propertyGroups = result},
        error: (err) => {console.log(err); this.isLoading = false;},
        complete: () => {this.isLoading = false;}
      });
  }

  getPropertyGroupsByEntityItemId(entityItemId: number): void {
    this.isLoading = true;
    this.propertyGroupService.getPropertyGroupsByEntityItem(entityItemId)
      .subscribe({
        next: (result) => {this.propertyGroups = result},
        error: (err) => {console.log(err); this.isLoading = false;},
        complete: () => {this.isLoading = false;}
      });
  }

  onSubmit(): void {
    const data = <PropertyGroup>{
      name: 'Новая группа полей',
    }
    if(this.entityTypeId){
      data['entityTypes'] = [<EntityType>{id: this.entityTypeId}];
    }
    if(this.entitySectionId){
      data['entitySections'] = [<EntitySection>{id: this.entitySectionId}];
    }
    if(this.entitySectionId){
      data['entityItems'] = [<EntityItem>{id: this.entityItemId}];
    }
    this.propertyGroupService.createPropertyGroup(data)
      .subscribe({
        next: () => {},
        error: () => {},
        complete: () => {
          this.ngOnInit();
        }
      });
  }

  onDelete(): void {
    this.ngOnInit();
  }

}
