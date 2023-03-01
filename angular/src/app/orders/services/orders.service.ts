import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core';
import { IDocument } from 'src/app/core/auth/models/document.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private readonly _apiService: ApiService) {}

  orders(): Observable<IDocument[]> {
    return this._apiService.get<IDocument[]>('/documents/type/order');
  }
}
