import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  apiUrl:string='/assets/data.json';
  // apiUrl:string='https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction';

  constructor(private _httpClient:HttpClient) {}
    getVehicles(){
      return this._httpClient.get(this.apiUrl);
    }
    getVehicle(id:any){
      return this._httpClient.get(this.apiUrl+'/'+id);
    }

    getFilteredVehicles(term:any):Observable<any>{
   return this._httpClient.get(this.apiUrl+'?filter='+term)
    }

    getSortedVehicles(coloumn:any, order:any):Observable<any>{
   return this._httpClient.get(this.apiUrl+'?sortBy='+coloumn+"&order="+order)
    }
    getpagitedvehicles(limit:any,page:any):Observable<any>{
    return this._httpClient.get(this.apiUrl+'?limit='+limit+"&page="+page);
   }
   deletevehicle(id:any):Observable<any>{
    return this._httpClient.delete(this.apiUrl+'/'+id);
  }
 createvehicle(data:any):Observable<any>{
 return this._httpClient.post(this.apiUrl+'/',data);
  }
 updatevehicle(id:any,data:any):Observable<any>{
 return this._httpClient.put(this.apiUrl+'/'+id,data);
  }
  
  }
