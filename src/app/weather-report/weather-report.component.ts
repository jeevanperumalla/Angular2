import { Component } from '@angular/core';
import { WeatherReportService } from '../weather-report.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent {
WeatherDetails:any[]=[];
constructor(private _WeatherService:WeatherReportService){
  _WeatherService.getdetails().subscribe(
    (weatherdata:any)=>{
    console.log(weatherdata);
    this.WeatherDetails=weatherdata;
    console.log("weather data:",this.WeatherDetails);
    },(err:any)=>{
      alert("Internal server Error");
    }
  )
}
}
