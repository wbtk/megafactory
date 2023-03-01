import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { IDocument } from 'src/app/core/auth/models/document.model';

import { OrdersService } from './orders.service';

@Injectable()
export class OrdersResolverService implements Resolve<IDocument> {
  constructor(private readonly ordersService: OrdersService) {}

  resolve(): Observable<any> | Observable<IDocument> {
    return this.ordersService.orders();
  }
}
