import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { 
  EntityTypesComponent,
  EntityTypeComponent,
  EntitySectionsComponent,
  EntitySectionComponent,
  EntityItemsComponent,
  EntityItemComponent,
  PropertyGroupsComponent,
  PropertyGroupComponent,
  PropertiesComponent,
  PropertyComponent,
  PropertyValuesComponent,
  PropertyValueComponent,
  EntityTypeService,
  EntitySectionService,
  EntityItemService,
  PropertyGroupService,
  PropertyService,
  PropertyValueService
} from './';

import { EntitiesRoutingModule } from './entities-routing.module';
import { NavigationModule } from "../../shared/components/navigation/navigation.module";
import { HeaderModule } from "../../shared/components/header/header.module";
import { MainModule } from "../../shared/components/main/main.module";
import { EntityListModule } from 'src/app/shared';
import { EntityFormModule } from "src/app/shared";

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';



import { EntityTypeFormCreateComponent } from './components/entity-type/entity-type-form-create/entity-type-form-create.component';
import { EntityTypeFormUpdateComponent } from './components/entity-type/entity-type-form-update/entity-type-form-update.component';
import { EntityItemFormCreateComponent } from './components/entity-item/entity-item-form-create/entity-item-form-create.component';
import { EntityItemFormUpdateComponent } from './components/entity-item/entity-item-form-update/entity-item-form-update.component';


@NgModule({
    declarations: [
        EntityTypesComponent,
        EntityTypeComponent,
        EntitySectionsComponent,
        EntitySectionComponent,
        EntityItemsComponent,
        EntityItemComponent,
        PropertyGroupsComponent,
        PropertyGroupComponent,
        PropertiesComponent,
        PropertyComponent,
        PropertyValuesComponent,
        PropertyValueComponent,
        EntityTypeFormCreateComponent,
        EntityTypeFormUpdateComponent,
        EntityItemFormCreateComponent,
        EntityItemFormUpdateComponent
    ],
    providers: [
        EntityTypeService,
        EntitySectionService,
        EntityItemService,
        PropertyGroupService,
        PropertyService,
        PropertyValueService
    ],
    imports: [
        CommonModule,
        EntitiesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NavigationModule,
        HeaderModule,
        MainModule,
        MatInputModule,
        MatTableModule,
        MatButtonModule,
        MatSortModule,
        MatPaginatorModule,
        MatIconModule,
        EntityListModule,
        EntityFormModule,
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCheckboxModule,
        MatTabsModule,
        MatMenuModule
    ]
})
export class EntitiesModule { }
