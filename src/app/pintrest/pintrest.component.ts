import { Component } from '@angular/core';
import { PintrestService } from '../pintrest.service';

@Component({
  selector: 'app-pintrest',
  templateUrl: './pintrest.component.html',
  styleUrls: ['./pintrest.component.css']
})
export class PintrestComponent {
ImageDetails:any[]=[];
constructor(private _pintrestService:PintrestService){
  _pintrestService.getdetails().subscribe(
    (picdata:any)=>{
    console.log(picdata);
    this.ImageDetails=picdata;
    console.log("Pintrest data:",this.ImageDetails);
    },(err:any)=>{
      alert("Internal server Error");
    }
  )
}
}
