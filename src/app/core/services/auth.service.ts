import { IUserRegister } from './../../shared/models/IUserRegister';
import { IUserLogin } from './../../shared/models/IUserLogin';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  //TODO remove
  public userStatus$ = new Subject<boolean>();

  public notifySubscribers(status: boolean) {
    this.userStatus$.next(status);
  }

  login(userLogin: IUserLogin): Observable<any> {
    return this.http.post('auth/login', userLogin);
  }

  register(userRegister: IUserRegister): Observable<any> {
    return this.http.post('auth/register', userRegister);
  }

  isAuth() {
    return localStorage.getItem('bearer') !== null;
  }

  logOut() {
    this.removeInfo();
    this.removeToken();
  }

  setToken(token: string): void {
    localStorage.setItem('bearer', token);
  }

  setInfo(username: string, firstname: string, lastname: string): void {
    localStorage.setItem('username', username);
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
  }

  removeInfo(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
  }

  removeToken(): void {
    localStorage.removeItem('bearer');
  }

  getToken(): string {
    return localStorage.getItem('bearer');
  }

}
