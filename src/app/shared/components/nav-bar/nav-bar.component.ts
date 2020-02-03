import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['/auth/login'])
  }

  get username() {
    return localStorage.getItem('username');
  }

  changePassword() {

  }

}
