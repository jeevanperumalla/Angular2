import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creat-student',
  templateUrl: './creat-student.component.html',
  styleUrls: ['./creat-student.component.css']
})
export class CreatStudentComponent {
public studentForm:FormGroup=new FormGroup({

  name:new FormControl(),
  phone:new FormControl(),
  city:new FormControl(),
  dob:new FormControl(),
  profile_picture:new FormControl(),
  email:new FormControl(),
  school_logo: new FormControl(),
  school_name:new FormControl(),
  school_city:new FormControl(),
  school_pin:new FormControl(),
  });
  id:number=0;
  constructor(private _studentService:StudentService, private _router:Router, activatedroute:ActivatedRoute){
    activatedroute.params.subscribe((data:any)=>{
      this.id=data.id

    _studentService.getStudent(this.id).subscribe((data:any)=>{
      this.studentForm.patchValue(data);
    })

    })
  }
  Submit(){
    if(this.id){
      this._studentService.update(this.id,this.studentForm.value).subscribe((data:any)=>{
        alert("Student details are updated");
        this._router.navigateByUrl('/dashboard/Student')
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
    }
    else{
    console.log(this.studentForm.value);
    this._studentService
    .createStudent(this.studentForm.value).subscribe((data:any)=>{
    alert("Student details are added");
    this._router.navigateByUrl("/dashboard/Student");
    },(err:any)=>{
      alert("Internal Server Error!")
    }
  )
    }
  }
}
