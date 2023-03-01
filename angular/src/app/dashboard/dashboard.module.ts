import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from "../shared/components/header/header.module";
import { NavigationModule } from "../shared/components/navigation/navigation.module";
import { MainModule } from "../shared/components/main/main.module";

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        HeaderModule,
        NavigationModule,
        MainModule
    ]
})
export class DashboardModule { }