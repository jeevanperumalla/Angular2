import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creat-student',
  templateUrl: './creat-student.component.html',
  styleUrls: ['./creat-student.component.css']
})
export class CreatStudentComponent {
public studentForm:FormGroup=new FormGroup({

  name:new FormControl('', Validators.required),
  phone:new FormControl('', Validators.required),
  city:new FormControl('', Validators.required),
  dob:new FormControl('', Validators.required),
  profile_picture:new FormControl('', Validators.required),
  email:new FormControl('', Validators.required),
  school_logo: new FormControl('', Validators.required),
  school_name:new FormControl('', Validators.required),
  school_city:new FormControl('', Validators.required),
  school_pin:new FormControl('', Validators.required),
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
