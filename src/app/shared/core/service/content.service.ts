import { environment } from './../../../../environments/environment';
import { ContentGroupResonse, ContentResonse } from './../model/content';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }



  insertContentGroup(data): Observable<ContentGroupResonse> {
    return this.http.post<ContentGroupResonse>(environment.api_host + `/contentGroup/insetContentGroup`, data)
  }
  getAllContentGroup(): Observable<ContentGroupResonse> {
    return this.http.get<ContentGroupResonse>(environment.api_host + '/contentGroup/getAllContentGroup')
  }
  getContentGroupByID(id): Observable<ContentGroupResonse> {
    return this.http.get<ContentGroupResonse>(environment.api_host + `/contentGroup/getAllContentGroupByID/${id}`)
  }
  updateContentGroup(data, id): Observable<ContentGroupResonse> {
    return this.http.post<ContentGroupResonse>(environment.api_host + `/contentGroup/updateContentGroup/${id}`, data)
  }
  deleteContentGroup(id): Observable<ContentGroupResonse> {
    return this.http.delete<ContentGroupResonse>(environment.api_host + `/contentGroup/deleteContentGroup/${id}`)
  }
  // content
  insertContent(data): Observable<ContentResonse> {
    return this.http.post<ContentResonse>(environment.api_host + '/content/insertContent', data);
  }
  getAllContent(): Observable<ContentResonse> {
    return this.http.get<ContentResonse>(environment.api_host + '/content/getAllContent');
  }
  getContentById(id): Observable<ContentResonse> {
    return this.http.get<ContentResonse>(environment.api_host + `/content/getContentById/${id}`)
  }
  updateContent(data, id): Observable<ContentResonse> {
    return this.http.post<ContentResonse>(environment.api_host + `/content/updateContent/${id}`, data);
  }
  deleteContent(id):Observable<ContentResonse>{
    return this.http.delete<ContentResonse>(environment.api_host+`/content/deleteContent/${id}`)
  }
}
