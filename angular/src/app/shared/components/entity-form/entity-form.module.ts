import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityFormComponent } from './entity-form/entity-form.component';


@NgModule({
  declarations: [
    EntityFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EntityFormComponent
  ]
})
export class EntityFormModule { }
