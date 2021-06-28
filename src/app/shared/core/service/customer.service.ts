import { environment } from './../../../../environments/environment';
import { CustomerResonse } from './../model/customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }


  getAllCustomer(): Observable<CustomerResonse> {
    return this.http.get<CustomerResonse>(environment.api_host + '/customer/getAllCustomer');
  }
  deleteCustomer(id):Observable<CustomerResonse>{
    return this.http.delete<CustomerResonse>(environment.api_host+ `/customer/deleteCustomer/${id}`)
  }

}
