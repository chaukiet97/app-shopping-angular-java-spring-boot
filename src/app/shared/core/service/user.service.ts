import { UsersResonse } from './../model/user';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
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
  updatePassord(password_hash, id): Observable<UsersResonse> {
    return this.http.post<UsersResonse>(environment.api_host + `/users/updatePassword/${id}`, password_hash);
  }
  deleteUserById(id):Observable<UsersResonse>{
    return this.http.delete<UsersResonse>(environment.api_host+`/users/deleteUser/${id}`)
  }
}
