import { PageResonse } from './../model/pages';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PageGroupResonse } from '../model/pages';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http: HttpClient) { }



  insertPageGroup(data): Observable<PageGroupResonse> {
    return this.http.post<PageGroupResonse>(environment.api_host + `/pagesGroup/insertPagestGroup`, data);
  }
  updatePageGroup(name, id): Observable<PageGroupResonse> {
    let data = {
      "name": name
    }
    return this.http.post<PageGroupResonse>(environment.api_host + `/pagesGroup/updatePagesGroup/${id}`, data);
  }
  getPageGroup(): Observable<PageGroupResonse> {
    return this.http.get<PageGroupResonse>(environment.api_host + '/pagesGroup/getPagesGroup');
  }

  getPageGroupByID(id): Observable<PageGroupResonse> {
    return this.http.get<PageGroupResonse>(environment.api_host + `/pagesGroup/getPagesGroup/${id}`);
  }
  deletePageGroup(id): Observable<PageGroupResonse> {
    return this.http.delete<PageGroupResonse>(environment.api_host + `/pagesGroup/deletePagesGroup/${id}`)
  }
  // service page
  insertPage(data): Observable<PageResonse> {
    return this.http.post<PageResonse>(environment.api_host + `/page/insertPage`, data);
  }
  getAllPage(): Observable<PageResonse> {
    return this.http.get<PageResonse>(environment.api_host + '/page/getPages');
  }

  getPageById(id: number): Observable<PageResonse> {
    return this.http.get<PageResonse>(environment.api_host + `/page/getPages/${id}`);
  }
  updatePage(data, id): Observable<PageResonse> {
    return this.http.post<PageResonse>(environment.api_host + `/page/updatePage/${id}`, data);
  }
  deletePage(id): Observable<PageResonse> {
    return this.http.delete<PageResonse>(environment.api_host + `/page/deletePage/${id}`)
  }
  getPageByType():Observable<PageResonse>{
    return this.http.get<PageResonse>(environment.api_host+`/page/pageByType`)
  }
}
