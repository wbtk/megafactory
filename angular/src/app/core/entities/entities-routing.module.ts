import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth';
import { EntityItemComponent, EntityTypesComponent } from './components';
import { EntityTypeComponent } from './components';

const routes: Routes = [
  { 
    path: 'entity-types', 
    component: EntityTypesComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'entity-type/create', 
    component: EntityTypeComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'entity-type/edit/:id', 
    component: EntityTypeComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'entity-type/:entityTypeId/entity-item/create',
    component: EntityItemComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'entity-type/:entityTypeId/entity-item/edit/:entityItemId',
    component: EntityItemComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntitiesRoutingModule { }
