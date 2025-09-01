import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private _httpclient:HttpClient) { }
  getStudentdetails():Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student');
}

getStudent(id: number):Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id);
}
update(id:number, data:any):Observable<any>{
    return this._httpclient.put('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id,data);
}
getFilteredStudent(term:any):Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter='+term);
  }

getSortedStudentDetails(column:any,order:any):Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortby='+column+'&order='+order);
  }

  deleteStudent_id(id:any):Observable<any>{
  return this._httpclient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id);
  }

  getPaginatedStudent(limit:any,page:any):Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit='+limit+"&page="+page);
  }

  createStudent(data:any):Observable<any>{
  return this._httpclient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/student',data);
}

}