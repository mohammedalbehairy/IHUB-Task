import { AuthGuardService } from './shared/middlewares/auth-guard.service';
import { AuthGuestService } from './shared/middlewares/auth-guest.service';
import { UsersLayoutComponent } from './users/components/users-layout/users-layout.component';
import { AuthLayoutComponent } from './auth/components/auth-layout/auth-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [AuthGuestService],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: UsersLayoutComponent,
    canActivate: [AuthGuardService],
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
