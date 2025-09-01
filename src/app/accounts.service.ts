import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _httpClient:HttpClient) { }
  getCustomerDetails(value: any):Observable<any>{
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals');

}

getFilteredCustomerDetails(term:any):Observable<any>{
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter='+term);

}

getSortingCustomerDetails(column:any,order:any):Observable<any>{
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy='+column+"&order="+order);

}

getPaginationCustomerDetails(limit:any,page:any):Observable<any>{
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit='+limit+"&page="+page);

}
createCustomer(data:any):Observable<any>{
  return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/',data);

}

deleteCustomer(id:any):Observable<any>{
  return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id);

}
}
