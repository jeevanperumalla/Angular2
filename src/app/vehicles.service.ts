import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  static getVehicles() {
    throw new Error('Method not implemented.');
  }

  constructor(private _httpClient:HttpClient) {}
    getVehicles(){
      return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction');
    }
    getVehicle(id:any){
      return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
    }

    getFilteredVehicles(term:any):Observable<any>{
   return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter='+term)
    }

    getSortedVehicles(coloumn:any, order:any):Observable<any>{
   return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy='+coloumn+"&order="+order)
    }
    getpagitedvehicles(limit:any,page:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit='+limit+"&page="+page);
   }
   deletevehicle(id:any):Observable<any>{
    return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
  }
 createvehicle(data:any):Observable<any>{
 return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/',data);
  }
 updatevehicle(id:any,data:any):Observable<any>{
 return this._httpClient.put('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id,data);
  }
  
  }
