import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { NavigationModule } from "../shared/components/navigation/navigation.module";
import { HeaderModule } from "../shared/components/header/header.module";
import { MainModule } from "../shared/components/main/main.module";
import { OrdersService } from './services/orders.service';
import { OrdersResolverService } from './services/orders-resolver.service';

import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatSortModule } from '@angular/material/sort'
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
    declarations: [
        OrdersComponent
    ],
    providers: [OrdersService, OrdersResolverService],
    imports: [
        CommonModule,
        OrdersRoutingModule,
        NavigationModule,
        HeaderModule,
        MainModule,
        MatListModule,
        MatTableModule,
        MatCheckboxModule,
        MatSortModule,
        MatPaginatorModule,
        MatTabsModule
    ]
})
export class OrdersModule { }
