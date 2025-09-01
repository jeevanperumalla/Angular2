import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flipkartchild',
  templateUrl: './flipkartchild.component.html',
  styleUrls: ['./flipkartchild.component.css']
})
export class FlipkartchildComponent {
  @Input() rating:number=0;

}
