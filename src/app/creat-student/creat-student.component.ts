// import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { StudentService } from '../student.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-creat-student',
//   templateUrl: './creat-student.component.html',
//   styleUrls: ['./creat-student.component.css']
// })
// export class CreatStudentComponent {
// public studentForm:FormGroup=new FormGroup({

//   name:new FormControl(),
//   phone:new FormControl(),
//   city:new FormControl(),
//   dob:new FormControl(),
//   profile_picture:new FormControl(),
//   email:new FormControl(),
//   school_logo: new FormControl(),
//   school_name:new FormControl(),
//   school_city:new FormControl(),
//   school_pin:new FormControl(),
//   });
//   private _studentservice: any;

//   constructor(private _idcardService:StudentService, private _router:Router){}
//   submit(){
//     console.log(this.studentForm.value);
//     this._studentservice.createStduent_id(this.studentForm.value).subscribe((data:any)=>{
//       alert("Student details are added");
//  this._router.navigateByUrl("/dashboard/");

//     },(err:any)=>{
//       alert("Internal Server Error!")
//     }
//   )
//   }
// }
