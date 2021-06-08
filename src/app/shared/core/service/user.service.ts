import { Users, UsersResonse } from './../model/user';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Fe2User: Users;

  constructor(private http: HttpClient) { }
  setFe2User(user) {
    this.Fe2User = user;
    localStorage.setItem("Fe2User", JSON.stringify(user));
  }

  clearFe2User() {
    localStorage.removeItem("Fe2User");
    this.Fe2User = null;
  }

  clearFe2UserVariable() {
    this.Fe2User = null;
  }

  getFe2User(): Users {
    return JSON.parse(localStorage.getItem("Fe2User"));;
  }

  checkFe2User() {
    if (this.Fe2User != null)
      return true;
    if (this.Fe2User != null)
      return true;
    return false;
  }

  register(data): Observable<UsersResonse> {
    return this.http.post<UsersResonse>(environment.api_host + `/users/register`, data);
  }
  login(data): Observable<UsersResonse> {
    return this.http.post<UsersResonse>(environment.api_host + `/users/login`, data);
  }
  getAllUser(): Observable<UsersResonse> {
    return this.http.get<UsersResonse>(environment.api_host + `/users/getAllUser`);
  }
  getUserByID(userId): Observable<UsersResonse> {
    return this.http.get<UsersResonse>(environment.api_host + `/users/getUser/${userId}`);
  }
  insertUser(data): Observable<UsersResonse> {
    return this.http.post<UsersResonse>(environment.api_host + `/users/insertUser`, data);
  }
  updateUser(data, id): Observable<UsersResonse> {
    return this.http.post<UsersResonse>(environment.api_host + `/users/updateUser/${id}`, data);
  }
  updatePassord(password_hash:string, id:number): Observable<UsersResonse> {
    let data={
      "password_hash":password_hash
    }
    return this.http.post<UsersResonse>(environment.api_host + `/users/updatePassword/${id}`, data);
  }
  deleteUserById(id):Observable<UsersResonse>{
    return this.http.delete<UsersResonse>(environment.api_host+`/users/deleteUser/${id}`)
  }
}
