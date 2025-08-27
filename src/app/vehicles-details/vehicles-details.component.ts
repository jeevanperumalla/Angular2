import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.css']
})
export class VehiclesDetailsComponent {
id:number=0;
  vehicle: any;
constructor(private _activatedRoute:ActivatedRoute, private _vehicleService:VehiclesService){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data);
      this.id=data.id;
      console.log(this.id);


      _vehicleService.getVehicle(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicle=data;
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
}

  )
}
}


