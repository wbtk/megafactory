import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../api';
import { EntityItem } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class EntityItemService {

  constructor(
    private readonly apiService: ApiService,
    ){}

  createEntityItem(data: EntityItem): Observable<EntityItem> {
    return this.apiService.post<EntityItem, EntityItem>('/entity-items/', data);
  }

  updateEntityItem(id: number, data: EntityItem): Observable<EntityItem> {
    return this.apiService.patch<EntityItem, EntityItem>('/entity-items/' + id, data);
  }

  getEntityItems(id: number): Observable<EntityItem[]> {
    return this.apiService.get<EntityItem[]>('/entity-items/entity-type/' + id);
  }

  getEntityItem(id: number): Observable<EntityItem> {
    return this.apiService.get<EntityItem>('/entity-items/' + id);
  }

  deleteEntityItem(id: number): Observable<EntityItem> {
    return this.apiService.delete('/entity-items/' + id);
  }

}
