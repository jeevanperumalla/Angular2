import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  isDatapresent:Boolean=false;
  image_url:string='https://tse1.mm.bing.net/th/id/OIP.rFolOsu8YXKbrBVKlLEDJQHaIL?pid=Api'
  name:string='Jeevan';
  age:number=28;
 mobile:string="+91";
  greeting(){
    alert("Helloooo")
  }
  typing(){
    alert(this.mobile)
  }
  fruits(){
    alert("Fruit Changed!")
  }
}
