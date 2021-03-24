import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductGroupResonse } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductGroup(): Observable<ProductGroupResonse> {
    return this.http.get<ProductGroupResonse>(environment.api_host + '/productsGroup/getProductGroup');
  }
}
