import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
substraction() {
throw new Error('Method not implemented.');
}
  num1:number=0;
  num2:number=0;
  result:number=0;
  
  adition(){
    this.result=this.num1+this.num2;
    console.log(this.result);
  }

  sub(){
    this.result=this.num1-this.num2;
    console.log(this.result);
  }
  mul(){
    this.result=this.num1*this.num2;
    console.log(this.result);
  }
  Div(){
    this.result=this.num1/this.num2;
    console.log(this.result);
  }
}
