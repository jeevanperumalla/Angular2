import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
vehicles:any[]=[];
constructor(private _vehiclesService:VehiclesService){
  _vehiclesService.getVehicles().subscribe(
    (data:any)=>{
    console.log(data);
    this.vehicles=data;
    console.log("vehicles data:",this.vehicles);
    },(err:any)=>{
      alert("Internal server Error");
    }
  )
}
}