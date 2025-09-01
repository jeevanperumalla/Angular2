import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from '../accounts.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
 public accountsForm:FormGroup=new FormGroup({
  account_name:new FormControl(),
  available_balance:new FormControl(),
  account_number:new FormControl(),
  city:new FormControl(),
  profie_picture:new FormControl(),
ifsc_code:new FormControl(),
  });

  constructor(private _accountsService:AccountsService, private _router:Router){}
create(){
  this._accountsService.createCustomer(this.accountsForm.value).subscribe((data:any)=>{
    console.log("details:",this.accountsForm.value);
    alert("Record is created");
    this._router.navigateByUrl('/dashboard/accounts');
     
  },(error:any)=>{
    alert("Internal Server Error!")
  }
)
}
  

}
