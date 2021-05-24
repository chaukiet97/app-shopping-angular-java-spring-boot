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
  getAllUser():Observable<UsersResonse>{
    return this.http.get<UsersResonse>(environment.api_host+`/users/getAllUser`)
  }
}
