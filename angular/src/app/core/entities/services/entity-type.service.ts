import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../api';
import { EntityItem, EntityType } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class EntityTypeService {

  constructor(
    private readonly apiService: ApiService,
    ) { }

  getEntityTypes(): Observable<EntityType[]> {
    return this.apiService.get<EntityType[]>('/entity-types');
  }

  getEntityType(id: number): Observable<EntityType> {
    return this.apiService.get<EntityType>('/entity-types/' + id);
  }

  createEntityType(data: EntityType): Observable<EntityType> {
    return this.apiService.post<EntityType, EntityType>('/entity-types/', data);
  }

  updateEntityType(id: number, data: EntityType): Observable<EntityType> {
    return this.apiService.patch<EntityType, EntityType>('/entity-types/' + id, data);
  }

  deleteEntityType(id: number): Observable<EntityType> {
    return this.apiService.delete('/entity-types/' + id);
  }
  
}
