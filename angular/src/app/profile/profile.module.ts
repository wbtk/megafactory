import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DetailsCardModule,
  HeaderModule,
  LoaderModule,
  NavigationModule
} from 'src/app/shared/components';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileService } from './services/profile.service';
import { MainModule } from "../shared/components/main/main.module";
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { FormFieldModule } from "../shared/components/form-field/form-field.module";

@NgModule({
    declarations: [ProfileComponent, ProfileFormComponent],
    providers: [ProfileService],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProfileRoutingModule,
        HeaderModule,
        LoaderModule,
        DetailsCardModule,
        NavigationModule,
        MainModule,
        FormFieldModule
    ]
})
export class ProfileModule {}
