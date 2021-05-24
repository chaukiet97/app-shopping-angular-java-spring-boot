import { MadeInResonse, BrandResonse, ProductResonse } from './../model/products';
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

  // product group
  getProductGroup(): Observable<ProductGroupResonse> {
    return this.http.get<ProductGroupResonse>(environment.api_host + '/products/getProductGroup');
  }
  getProducGrouptById(id: number): Observable<ProductGroupResonse> {
    return this.http.get<ProductGroupResonse>(environment.api_host + '/products/getProductGroup/' + id);

  }
  updateProductGroup(name, id): Observable<ProductGroupResonse> {
    let data = {
      "name": name
    }
    return this.http.post<ProductGroupResonse>(environment.api_host + `/products/updateProductGroup/${id}`, data);
  }
  insertProductGroup(data): Observable<ProductGroupResonse> {
    return this.http.post<ProductGroupResonse>(environment.api_host + '/products/insertProductGroup', data)
  }
  deleteProductGroup(id: number): Observable<ProductGroupResonse> {
    return this.http.delete<ProductGroupResonse>(environment.api_host + `/products/deleteProductGroup/${id}`)
  }

  // service made in
  insertMadeIn(data): Observable<MadeInResonse> {
    return this.http.post<MadeInResonse>(environment.api_host + `/products/insertMadeIn`, data);
  }
  updateMadeIn(name, id): Observable<MadeInResonse> {
    let data = {
      "name": name
    }
    return this.http.post<MadeInResonse>(environment.api_host + `/products/updateMadeIn/${id}`, data);
  }
  getAllMadeIn(): Observable<MadeInResonse> {
    return this.http.get<MadeInResonse>(environment.api_host + '/products/getMadeIn');
  }
  getMadeInById(id): Observable<MadeInResonse> {
    return this.http.get<MadeInResonse>(environment.api_host + `/products/getMadeIn/${id}`)
  }
  deleteMadeIn(id: number): Observable<MadeInResonse> {
    return this.http.delete<MadeInResonse>(environment.api_host + `/products/deleteMadeIn/${id}`)
  }

  // service brand
  insertBrand(data): Observable<BrandResonse> {
    return this.http.post<BrandResonse>(environment.api_host + "/products/insertBrand", data)
  }
  updateBrand(name: string, id: number): Observable<BrandResonse> {
    let data = {
      "name": name
    }
    return this.http.post<BrandResonse>(environment.api_host + `/products/updateBrand/${id}`, data);
  }
  getAllBrand(): Observable<BrandResonse> {
    return this.http.get<BrandResonse>(environment.api_host + '/products/getBrand');
  }
  getBrandByID(id): Observable<BrandResonse> {
    return this.http.get<BrandResonse>(environment.api_host + `/products/getBrand/${id}`)
  }
  deleteBrand(id): Observable<BrandResonse> {
    return this.http.delete<BrandResonse>(environment.api_host + `/products/deleteBrand/${id}`)
  }

  // add product list
  inserProduct(data): Observable<ProductResonse> {
    return this.http.post<ProductResonse>(environment.api_host + `/products/inserProduct`, data);
  }
  getAllProduct(): Observable<ProductResonse>{
    return this.http.get<ProductResonse>(environment.api_host + `/products/getAllProduct`)
  }
  getProductById(id:number):Observable<ProductResonse>{
    return this.http.get<ProductResonse>(environment.api_host + `/products/getProduct/${id}`)
  }
  updateProduct(id,data): Observable<ProductResonse>{
    return this.http.post<ProductResonse>(environment.api_host+`/products/updateProduct/${id}`,data)
  }
  deleteProduct(id): Observable<ProductResonse> {
    return this.http.delete<ProductResonse>(environment.api_host + `/products/deleteProduct/${id}`)
  }
}
