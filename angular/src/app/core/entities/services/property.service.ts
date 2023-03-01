import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../api';
import { Property } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private readonly apiService: ApiService) { }

  getProperties(groupId: number): Observable<Property[]> {
    return this.apiService.get<Property[]>('/properties/group/' + groupId);
  }

  getProperty(id: number): Observable<Property[]> {
    return this.apiService.get<Property[]>('/properties/' + id);
  }

  createProperty(data: Property): Observable<Property> {
    return this.apiService.post<Property, Property>('/properties/', data);
  }

  updateProperty(id: number,data: Property): Observable<Property> {
    return this.apiService.patch<Property, Property>('/properties/' + id, data);
  }

  deleteProperty(id: number): Observable<Property> {
    return this.apiService.delete('/properties/' + id);
  }
}
