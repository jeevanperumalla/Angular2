import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
Cards:any[]=[];
   constructor(private  _studentservices:StudentService){
   _studentservices.getidcard().subscribe(
     (data:any)=>{
       console.log(data);
       this.Cards=data;
        console.log("data:", this.Cards);
      },(err:any)=>{
       alert("internal server error");
      })
     }

//filtered IdCards

searchkeyword:string='';
search(){
  this._studentservices.getFilteredidcard(this.searchkeyword).subscribe(
    (data:any)=>{
      console.log(data);
      this.Cards=data;
      // console.log("vehicles data:", this.vehicles);
     },(err:any)=>{
      alert("internal server error");
     }
    )
}
//sorting

columnName:string='';
sortorder:string='';
sort(){
  this._studentservices.getSortedidcard(this.columnName,this.sortorder).subscribe(
    (data:any)=>{
      console.log(data);
      this.Cards=data;
      // console.log("vehicles data:", this.vehicles);
     },(err:any)=>{
      alert("internal server error");
     }
    )
}

items:number=0;
pagenumber:number=0;
pagination(){
 this._studentservices.getpagitedidcard(this.items,this.pagenumber).subscribe((data:any)=>{
  console.log(data);
    this.Cards=data;
    },(err:any)=>{
      alert("internal server error")
    }
  )
}

loadidcards(){
  this._studentservices.getidcard().subscribe(
    (data:any)=>{
      console.log(data);
      this.Cards=data;
      console.log("idcard data:",this.Cards);
    },(err:any)=>{
      alert("internal server error");
    }
  )
}

delete(id: any) {
  if (confirm("Are you sure to delete?")==true) {
    this._studentservices.deleteidcard(id).subscribe(
      (data: any) => {
        alert("Record deleted successfully");
        // Only reload after successful delete
      },
      (err: any) => {
        alert("Internal server error");
      }
    );
    this.loadidcards(); 
  } else {
    alert("You have cancelled the delete");
  }
}
}