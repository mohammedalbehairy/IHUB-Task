import { ToastrService } from 'ngx-toastr';
import { UsersService } from './../../services/users.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public changePassForm: FormGroup;
  public isSubmitted = false;
  public errorMessage = null;
  constructor(
    private usersService: UsersService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.changePassForm = new FormGroup({
      oldPassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      newPassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }
  get oldPassword() {
    return this.changePassForm.get('oldPassword');
  }

  get newPassword() {
    return this.changePassForm.get('newPassword');
  }

  changePass() {

    console.log(this.changePassForm);
    this.errorMessage = null;
    if (this.changePassForm.invalid) {
      this.errorMessage = 'Invalid Data';
      return;
    }
    this.isSubmitted = true;
    const data = {
      oldPassword: this.oldPassword.value,
      newPassword: this.newPassword.value,
    };

    this.usersService.changePassword(data).subscribe(res => {
      console.log(res);
      this.toastr.success('Password changed successfully', 'Success');
      this.router.navigate(['/'])
    },
      err => {
        console.log(err);
        this.toastr.error(err.error, 'Error');
      })
  }

  cancelEditing() {
    this.changePassForm.reset();
  }
}
