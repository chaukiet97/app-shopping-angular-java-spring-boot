import { WebsiteResonse, BannerResonse } from './../model/settings';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
  deleteBanner(id:number):Observable<BannerResonse>{
    return this.http.delete<BannerResonse>(environment.api_host+`/settings/banner/deleteBannerByID/${id}`)
  }
}
