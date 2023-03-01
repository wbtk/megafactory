import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService, UserData } from 'src/app/core';

@Injectable()
export class ProfileService {
  constructor(private readonly _apiService: ApiService) {}

  me(): Observable<UserData> {
    return this._apiService.get<UserData>('/users/me');
  }

  users(): Observable<UserData> {
    return this._apiService.get<UserData>('/users');
  }

  update(form: UserData): Observable<UserData>{
    return this._apiService.put('/users/me', form)
  }
}
