import { WebsiteResonse, BannerResonse } from './../model/settings';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }
  getProfileWebsite(): Observable<WebsiteResonse> {
    return this.http.get<WebsiteResonse>(environment.api_host + '/settings/website/getProfileWebsite');
  }
  insertSettingWebsite(data): Observable<WebsiteResonse> {
    return this.http.post<WebsiteResonse>(environment.api_host + `/settings/website/insertWebsite`, data);
  }
  updateSettingWebsite(data, id): Observable<WebsiteResonse> {
    return this.http.post<WebsiteResonse>(environment.api_host + `/settings/website/updateWebsite/${id}`, data);
  }

  //  banner
  insertSettingBanner(data): Observable<BannerResonse> {
    return this.http.post<BannerResonse>(environment.api_host + `/settings/banner/insertBanner`, data);
  }
  getAllBanner(): Observable<BannerResonse> {
    return this.http.get<BannerResonse>(environment.api_host + '/settings/banner/getAllBanner');
  }
  getBannerByID(id: number): Observable<BannerResonse> {
    return this.http.get<BannerResonse>(environment.api_host + `/settings/banner/getBannerByID/${id}`)
  }
  updateBanner(id: number, data): Observable<BannerResonse> {
    return this.http.post<BannerResonse>(environment.api_host + `/settings/banner/updateBanner/${id}`, data);
  }
  deleteBanner(id: number): Observable<BannerResonse> {
    return this.http.delete<BannerResonse>(environment.api_host + `/settings/banner/deleteBannerByID/${id}`)
  }
  getAllBankVN(): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': ' application/json, text/plain, / ',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Access-Control-Allow-Origin': '*',
        'Acces-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
        'Access-Control-Allow-Credentials': 'true',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'X-Requested-With': 'XMLHttpRequest',
        'Origin': '*',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers: Origin, Content-Type, X-Requested-With',
        'Access-Control-Max-Age': '36000'
      })
    };
    return this.http.get<any>(environment.api_host_bank, httpOptions);
  }
}
