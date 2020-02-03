import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public list() {
    return this.http.get('users');
  }

  public delete(id: string) {
    return this.http.delete(`users/${id}`);
  }
}
