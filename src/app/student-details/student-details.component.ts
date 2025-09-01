import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  id:number=0;
  student:any={};
constructor(private _activatedRoute:ActivatedRoute, private _studentService:StudentService){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data);
      this.id=data.id;
      console.log(this.id);


      _studentService.getStudent(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
        console.log(this.student);
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
}

  )
}
}
