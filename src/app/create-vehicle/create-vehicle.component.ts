import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
public vehicleForm:FormGroup=new FormGroup({
  Vehicle:new FormControl(),
  manufacturer:new FormControl(),
  model:new FormControl(),
  type:new FormControl(),
  fuel:new FormControl(),
  color:new FormControl(),
   image:new FormControl(),
    cost:new FormControl(),
     tyres:new FormControl(),
});
constructor(private _vehiclesService:VehiclesService, private _router:Router){}
  submit(){
    console.log(this.vehicleForm.value);
    this._vehiclesService
    .createvehicle(this.vehicleForm.value).subscribe((data:any)=>{
      alert("Vehicle added successfully");
      this._router.navigateByUrl("/dashboard/Vehicles");
    },(err:any)=>{
      alert("internal server error")
    }
  )
}
  }

