import { ApiResonse } from './../model/api';
import { environment } from './../../../../environments/environment';
import { Page, PageResonse } from './../model/pages';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMenu():Observable<PageResonse>{
    return this.http.get<PageResonse>(environment.api_host+`/api/getMenu/${1}`)
  }
  addContact(data):Observable<ApiResonse>{
    return this.http.post<ApiResonse>(environment.api_host+`/api/addContact`,data);
  }
}
