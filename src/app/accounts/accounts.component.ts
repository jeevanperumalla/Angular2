import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { identifierName } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accounts:any[]=[];
  constructor(private _accountsService:AccountsService,private _router:Router){
     this.loadAccountDetails();
  }
  loadAccountDetails(){
    this._accountsService.getCustomerDetails(this.accounts).subscribe((data:any)=>{
       this.accounts=data;
      console.log( "Details: ", this.accounts);
    },(err:any)=>{
      alert("Internal Server Error!")
    }
  )

}

  
  searchkeyword:string='';
  search(){
    this._accountsService.getFilteredCustomerDetails(this.searchkeyword).subscribe((data:any)=>{
        console.log(data);
        this.accounts=data;
    },(error:any)=>{
      alert("Internal Server Error");
    }
  )

  }

columnName:string='';
orderName:string='';
sort(){
  this._accountsService.getSortingCustomerDetails(this.columnName,this.orderName).subscribe((data:any)=>{
      this.accounts=data;
  },(error:any)=>{
    alert("Internal Server Error!")
  }
)
}

limitNumber:number=0;
pageNumber:number=0;
pagination(){
  this._accountsService.getPaginationCustomerDetails(this.limitNumber,this.pageNumber).subscribe((data:any)=>{
    this.accounts=data;
  },(error:any)=>{
    alert("Internal Server Error");
  }
)
}

create(){
this._router.navigateByUrl('/dashboard/createaccount');
}

delete(id:any){
  if(confirm("Are you sure to delete?")==true){
this._accountsService.deleteCustomer(id).subscribe((data:any)=>{
  alert("Record deleted scuccesfully");
    this.loadAccountDetails();

},(error:any)=>{
  alert("Internal Server Error!");
}
)
  }

  else{
    alert("you have succesfully cancelled");
  }
}
}