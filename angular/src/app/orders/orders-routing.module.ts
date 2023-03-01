import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core';
import { LoaderComponent } from '../shared';
import { OrdersComponent } from './orders.component';
import { OrdersResolverService } from './services/orders-resolver.service';

const routes: Routes = [
  { 
    path: '',
    component: OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
