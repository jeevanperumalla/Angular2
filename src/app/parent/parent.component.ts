import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parent:number=0;
  child:number=0;

   catch(value:number){
    this.child=value;
   }
  // count(data:number){
  //   alert(data);
  // }
 userDetails:User={
  name:'Jeevan',
  mobile:7287880354,
  isIndian:true
 }
}
