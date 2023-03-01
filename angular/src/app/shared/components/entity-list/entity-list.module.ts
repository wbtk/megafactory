import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EntityListComponent } from './entity-list.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort'
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { RuPaginatorIntl } from './RuPaginatorIntl';

@NgModule({
  declarations: [
    EntityListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  exports: [
    EntityListComponent
  ],
  providers: [{provide: MatPaginatorIntl, useClass: RuPaginatorIntl}],
})
export class EntityListModule { }
