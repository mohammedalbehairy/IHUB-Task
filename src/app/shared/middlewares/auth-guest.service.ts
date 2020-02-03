import { AuthService } from './../../core/services/auth.service';
import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuestService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isAuth()) {
        this.router.navigate([route.queryParams['return'] || '/']).then().catch();
        return false;
    }
    return true;
  }
}

