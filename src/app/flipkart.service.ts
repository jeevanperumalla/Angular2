import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {

  constructor(private _httpClient:HttpClient) {}
      getdetails(){
        return this._httpClient.get('https://fakestoreapi.com/products');
      }
}
