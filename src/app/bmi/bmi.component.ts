import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent {
  Height:number=0;
Weight:number=0;
BMI:number=0;
calculateBMI() {
  this.BMI = this.Weight / (this.Height * this.Height);
}
}
