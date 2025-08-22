import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  ID_Details:any[]=[];
  constructor(private _studentService:StudentService){
    _studentService.getdetails().subscribe(
      (picdata:any)=>{
      console.log(picdata);
      this.ID_Details=picdata;
      console.log("Pintrest data:",this.ID_Details);
      },(err:any)=>{
        alert("Internal server Error");
      }
    )
  }
  delete(id:any){
  this._studentService.deleteStudent_id(id).subscribe((data:any)=>{
   alert("ID delete successfully")
    },(err:any)=>{
      alert("internal server error")
    }
  )
  }
}
