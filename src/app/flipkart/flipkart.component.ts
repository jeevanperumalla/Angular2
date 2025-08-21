import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
Details:any[]=[];
constructor(private _FlipkartService:FlipkartService){
  _FlipkartService.getdetails().subscribe(
    (maildata:any)=>{
    console.log(maildata);
    this.Details=maildata;
    console.log("Flipkart data:",this.Details);
    },(err:any)=>{
      alert("Internal server Error");
    }
  )
}
}
