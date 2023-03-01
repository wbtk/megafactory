import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../api';
import { PropertyGroup } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PropertyGroupService {

  constructor(private readonly apiService: ApiService) { }

  getPropertyGroupsByEntityType(entityTypeId: number): Observable<PropertyGroup[]> {
    return this.apiService.get<PropertyGroup[]>('/property-groups/entity-type/' + entityTypeId);
  }

  getPropertyGroupsByEntitySection(entitySectionId: number): Observable<PropertyGroup[]> {
    return this.apiService.get<PropertyGroup[]>('/property-groups/entity-section/' + entitySectionId);
  }

  getPropertyGroupsByEntityItem(entityItemId: number): Observable<PropertyGroup[]> {
    return this.apiService.get<PropertyGroup[]>('/property-groups/entity-item/' + entityItemId);
  }

  getPropertyGroup(id: number): Observable<PropertyGroup[]> {
    return this.apiService.get<PropertyGroup[]>('/property-groups/' + id);
  }

  createPropertyGroup(data: PropertyGroup): Observable<PropertyGroup> {
    return this.apiService.post<PropertyGroup, PropertyGroup>('/property-groups/', data);
  }

  updatePropertyGroup(id: number,data: PropertyGroup): Observable<PropertyGroup> {
    return this.apiService.patch<PropertyGroup, PropertyGroup>('/property-groups/' + id, data);
  }

  deletePropertyGroup(id: number): Observable<PropertyGroup> {
    return this.apiService.delete('/property-groups/' + id);
  }
}
