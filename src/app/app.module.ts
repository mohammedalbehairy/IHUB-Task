import { AuthGuestService } from './shared/middlewares/auth-guest.service';
import { AuthGuardService } from './shared/middlewares/auth-guard.service';
import { httpInterceptorProviders } from './shared/interceptors/index';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    AuthModule,
    UsersModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-center', //positionClass: 'toast-top-full-width',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
      enableHtml: true
    }),
  ],
  providers: [
    httpInterceptorProviders,
    AuthGuardService,
    AuthGuestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
