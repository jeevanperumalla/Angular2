import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { subscribeOn } from 'rxjs';
// Removed import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles: any[] = [];
  
  constructor(private _vehiclesService: VehiclesService) {
    this.loadVehicles();
  }

  loadVehicles() {
    this._vehiclesService.getVehicles().subscribe(
      (data: any) => {
        console.log(data);
        this.vehicles = data;
        console.log("vehicles data:", this.vehicles);
      }, (err: any) => {
        alert("Internal server Error");
      }
    );
  }

  delete(id: any) {
    if (confirm("Are you sure to delete") == true) {
      this._vehiclesService.deletevehicle(id).subscribe((data: any) => {
        alert("Record deleted successfully");
      }, (err: any) => {
        alert("Internal server error");
      });

      this.loadVehicles();  // Refresh the list after deletion
    } else {
      alert("You have cancelled the delete");
    }
  }

  searchkeyword: string = '';
  search() {
    this._vehiclesService.getFilteredVehicles(this.searchkeyword).subscribe((data: any) => {
      console.log(data);
      this.vehicles = data;
    }, (err: any) => {
      alert('Internal server error');
    });
  }

  coloumnName: string = '';
  sortOrder: string = '';
  sort() {
    this._vehiclesService.getSortedVehicles(this.coloumnName, this.sortOrder).subscribe((data: any) => {
      console.log(data);
      this.vehicles = data;
    }, (err: any) => {
      alert("Internal server error");
    });
  }

  items: number = 0;
  pagenumber: number = 0;
  pagination() {
    this._vehiclesService.getpagitedvehicles(this.items, this.pagenumber).subscribe((data: any) => {
      console.log(data);
      this.vehicles = data;
    }, (err: any) => {
      alert("Internal server error");
    });
  }
}
