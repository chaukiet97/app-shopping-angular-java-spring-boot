import { CustomerResonse } from './../model/customer';
import { ProductResonse, APIProductResponse } from './../model/products';
import { BannerResonse, WebsiteResonse } from './../model/settings';
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

  getMenu(): Observable<PageResonse> {
    return this.http.get<PageResonse>(environment.api_host + `/api/getMenu/${1}`)
  }
  addContact(data): Observable<ApiResonse> {
    return this.http.post<ApiResonse>(environment.api_host + `/api/addContact`, data);
  }
  getBannerHeaderTop(): Observable<BannerResonse> {
    return this.http.get<BannerResonse>(environment.api_host + '/api/getBannerHeaderTop');
  }
  getMenuHeader(): Observable<PageResonse> {
    return this.http.get<PageResonse>(environment.api_host + `/api/getMenu/${2}`);
  }
  getCompany(): Observable<WebsiteResonse> {
    return this.http.get<WebsiteResonse>(environment.api_host + '/api/getCompany');
  }
  getAllSlide(): Observable<BannerResonse> {
    return this.http.get<BannerResonse>(environment.api_host + '/api/getAllSlide');
  }
  getAllProduct(): Observable<APIProductResponse> {
    return this.http.get<APIProductResponse>(environment.api_host + '/api/getAllProduct');
  }
  getProdutByLink(link): Observable<APIProductResponse> {
    return this.http.get<APIProductResponse>(environment.api_host + `/api/getProduct/${link}`)
  }
  getProdutDetailByLink(link): Observable<APIProductResponse> {
    return this.http.get<APIProductResponse>(environment.api_host + `/api/getProductDetail/${link}`)
  }
  getMenuFooter(): Observable<PageResonse> {
    return this.http.get<PageResonse>(environment.api_host + `/api/getMenu/${3}`);
  }
  getMenuSupport(): Observable<PageResonse> {
    return this.http.get<PageResonse>(environment.api_host + `/api/getMenu/${4}`);
  }
  getProductById(id): Observable<APIProductResponse> {
    return this.http.get<APIProductResponse>(environment.api_host + `/api/getProductById/${id}`)
  }
  signup(data): Observable<CustomerResonse> {
    return this.http.post<CustomerResonse>(environment.api_host + `/customer/insertCustomer`, data);
  }
  search(data): Observable<APIProductResponse> {
    return this.http.post<APIProductResponse>(environment.api_host + `/api/searchProduct`, data)
  }
  getProductByType(type): Observable<APIProductResponse> {
    return this.http.get<APIProductResponse>(environment.api_host + `/api/getProductByType/${type}`)
  }
  login(data): Observable<CustomerResonse> {
    return this.http.post<CustomerResonse>(environment.api_host + `/api/login`, data);
  }
}
