import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  Radius:number=0;
  result:number=0;

  area(){
    this.result = Math.PI * this.Radius * this.Radius;
  }
  perimeter(){
    this.result = 2 * Math.PI * this.Radius;
}
}

