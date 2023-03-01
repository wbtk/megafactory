import { HttpErrorResponse } from '@angular/common/http';
import { 
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

import { UserData } from 'src/app/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileFormComponent {

  profileForm!: FormGroup;

  ngOnInit() {
    this.profileForm = new FormGroup({
      lastname: new FormControl(this.profile?.lastname, [Validators.required]),
      firstname: new FormControl(this.profile?.firstname, [Validators.required]),
      email: new FormControl(this.profile?.email, [Validators.required, Validators.email]),
    });
  }

  constructor(
    private readonly profileService: ProfileService,
    private readonly _toastr: ToastrService,
  ){}

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  @Input()
  profile!: UserData;

  get lastname(): AbstractControl | null {
    return this.profileForm.get('lastname');
  }

  get firstname(): AbstractControl | null {
    return this.profileForm.get('firstname');
  }

  get email(): AbstractControl | null {
    return this.profileForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.profileForm.get('password');
  }

  async onSubmit(): Promise<void> {
    if (this.profileForm.valid) {
      this.isLoading$.next(true);
      this.profileService.update(this.profileForm.value)
        .subscribe({
          next: () => {},
          complete: () => {
            setTimeout(() => {this.isLoading$.next(false)}, 500)
          },
          error: (error: HttpErrorResponse) => {
            this._toastr.error(error.message, 'Error');
            setTimeout(() => {this.isLoading$.next(false)}, 500)
          }
        }
        );
    }
  }
}
