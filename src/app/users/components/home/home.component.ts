import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users = [];
  constructor(
    private usersService: UsersService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.list().subscribe((data: any) => {
      console.log(data);
      this.users = data;
    }, err => {
      console.log(err);
    })
  }

  deleteUser(userId: string) {
    this.usersService.delete(userId).subscribe(data => {
      this.getUsers();
      this.toastr.success('User was deleted successfully', 'Success');
    },
      err => {
        console.log(err);
      })
  }

  get username() {
    return localStorage.getItem('username');
  }
}
