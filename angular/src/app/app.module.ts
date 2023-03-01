import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { DestroyService } from 'src/app/shared/services';
import { SkeletonModule } from 'src/app/shared/components';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [
        DestroyService
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CoreModule,
        ToastrModule.forRoot({
            timeOut: 5000,
        }),
        SkeletonModule,
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        BrowserAnimationsModule
    ]
})
export class AppModule { }
