import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent {
  weatherData: any;
  Suncolor: string = '';

  constructor(private http: HttpClient) {
    this.http.get<any>('https://api.open-meteo.com/v1/forecast?latitude=17.385044&longitude=78.486671&current_weather=true')
      .subscribe(data => {
        this.weatherData = data.current_weather;
        this.SunColor(this.weatherData.temperature);
      });
  }

  SunColor(temp: number) {
    if (temp < 0) {
      this.Suncolor = 'blue';
    } else if (temp >= 0 && temp <= 30) {
      this.Suncolor = 'yellow';
    } else if (temp > 30 && temp <= 35) {
      this.Suncolor = 'green';
    } else {
      this.Suncolor = 'red';
    }
  }

  getDayOrNight(): string {
    return this.weatherData?.is_day === 1 ? 'Day Time' : 'Night Time';
  }
}

