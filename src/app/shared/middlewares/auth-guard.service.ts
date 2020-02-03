import { AuthService } from './../../core/services/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.auth.isAuth()) {
      this.router.navigate(['/auth/login'], {
        queryParams: {return: state.url}
      }).then().catch();
      return false;
    }
    return true;
  }

}

