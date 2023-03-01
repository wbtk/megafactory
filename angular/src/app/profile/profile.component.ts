import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map, takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { UserData } from 'src/app/core/auth';
import { ProfileService } from './services/profile.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DestroyService } from '../shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  profile$: Observable<UserData> = this._activatedRoute.data.pipe(
    map((data) => data['user'])
  );

  isLoading: boolean = false;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly profileService: ProfileService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _toastr: ToastrService,
    ) {}

  onSubmit(form: UserData): void {
    this.isLoading = true;
    this.profileService.update(form)
                        .pipe(
                          finalize(() => {
                            this.isLoading = false;
                          })
                        )
                        .subscribe({
                          next: () => {
                              
                          },
                          complete: () => {
                              // this._router.navigate(
                              //   [this._route.snapshot.queryParams['redirect'] || '/profile'],
                              //   { replaceUrl: true }
                              // );
                          },
                          error: (error: HttpErrorResponse) => {
                              this._toastr.error(error.message, 'Error');
                          }
                        }
                      );
  }
}
