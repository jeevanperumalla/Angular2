import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { compileNgModule } from '@angular/compiler';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
vehicles:any[]=[];
constructor(private _vehiclesService: VehiclesService){
this.loadVehicles();
}

loadVehicles(){
  this._vehiclesService.getVehicles().subscribe(
    (data:any)=>{
    console.log(data);
    this.vehicles=data;
    console.log("vehicles data:",this.vehicles);
    },(err:any)=>{
      alert("Internal server Error");
    }
  )
}
delete(id:any){
  if(confirm("Are you sure to delete")==true){
  this._vehiclesService.deletevehicle(id).subscribe((data:any)=>{
   alert("record delete successfully")
    },(err:any)=>{
      alert("internal server error")
    }
  )
loadVehicles();
  }else{
    alert("you have cancelled the delete")
  }
}
searchkeyword:string='';
search(){
  this._vehiclesService.getFilteredVehicles(this.searchkeyword).subscribe((data:any)=>{
    console.log(data);
    this.vehicles=data;
  },(err:any)=>{
    alert('Internal server error')
  }
  )
  }

  coloumnName:string='';
  sortOrder:string='';
  sort(){
    this._vehiclesService.getSortedVehicles(this.coloumnName,this.sortOrder).subscribe((data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
    alert("Internal server error")
    }
    )
  }
  items:number=0;
pagenumber:number=0;
pagination(){
 this._vehiclesService.getpagitedvehicles(this.items,this.pagenumber).subscribe((data:any)=>{
  console.log(data);
    this.vehicles=data;
    },(err:any)=>{
      alert("internal server error")
    }
  )
}

}
function loadVehicles() {
  throw new Error('Function not implemented.');
}

