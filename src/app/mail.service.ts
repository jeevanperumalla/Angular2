import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

constructor(private _httpClient:HttpClient) {}
    getmails(){
      return this._httpClient.get('http://jsonplaceholder.typicode.com/todos');
    }
  }
