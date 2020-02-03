import { IUserLogin } from './../../../shared/models/IUserLogin';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isSubmitted = false;
  public errorMessage = null;

  constructor(private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    console.log(this.loginForm);

    this.errorMessage = null;
    if (this.loginForm.invalid) {
      this.errorMessage = 'Invalid Username or/and password';
      return;
    }
    this.isSubmitted = true;
    const userLogInData: IUserLogin = {
      username: this.username.value,
      password: this.password.value
    };

    this.authService.login(userLogInData).subscribe(
      (result) => {
        this.authService.setToken(result.bearer);
        this.authService.setInfo(result.username, result.firstname, result.lastname);
        this.authService.notifySubscribers(true);
        this.router.navigate(['/']).then().catch();
      },
      (err) => {
        this.errorMessage = 'Invalid Username or/and password';
        this.isSubmitted = false;
      }
    );
  }
}

