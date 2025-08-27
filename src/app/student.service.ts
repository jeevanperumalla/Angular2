import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private _httpclient:HttpClient) { }
  getidcard():Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student');
}

 getFilteredidcard(term:any):Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter='+term);
  }

  getSortedidcard(column:any,order:any):Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortby='+column+'&order='+order);
  }

  deleteidcard(id:any):Observable<any>{
  return this._httpclient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id);
  }

  getpagitedidcard(limit:any,page:any):Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit='+limit+"&page="+page);
  }

  createIdCard(data:any):Observable<any>{
  return this._httpclient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/student',data);
}

}