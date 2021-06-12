import { ContactResonse } from './../model/contact';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  getAllContact(): Observable<ContactResonse> {
    return this.http.get<ContactResonse>(environment.api_host + '/contact/getAllContact')
  }
  getContactByID(id): Observable<ContactResonse> {
    return this.http.get<ContactResonse>(environment.api_host + `/contact/getContactByID/${id}`)
  }
  replyContact(data, id): Observable<ContactResonse> {
    return this.http.post<ContactResonse>(environment.api_host + `/contact/updateContact/${id}`, data)
  }
}
