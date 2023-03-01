import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { UserData } from 'src/app/core';

import { ProfileService } from './profile.service';

@Injectable()
export class ProfileResolverService implements Resolve<UserData> {
  constructor(private readonly _profileService: ProfileService) {}

  resolve(): Observable<any> | Observable<UserData> {
    return this._profileService.me();
  }
}
