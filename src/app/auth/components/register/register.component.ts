import { IUserRegister } from './../../../shared/models/IUserRegister';
import { AuthService } from './../../../core/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public isSubmitted = false;
  public errorMessage = null;

  constructor(private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }
  get username() {
    return this.registerForm.get('username');
  }
  get firstname() {
    return this.registerForm.get('firstname');
  }
  get lastname() {
    return this.registerForm.get('lastname');
  }

  get password() {
    return this.registerForm.get('password');
  }

  register() {

    this.errorMessage = null;
    if (this.registerForm.invalid) {

      return;
    }
    this.isSubmitted = true;
    const userRegisterData: IUserRegister = {
      username: this.username.value,
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      password: this.password.value
    };

    this.authService.register(userRegisterData).subscribe(
      (result) => {
        this.router.navigate(['/auth/login']).then().catch();
      },
      (err) => {
        this.errorMessage = err.message;
        this.isSubmitted = false;
      }
    );
  }

}

