import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
addRecord() {
throw new Error('Method not implemented.');
}
    products: any = [
    { ProductName: 'pen', Price: 10, Rating: 3, FreeDelivery: true },
     { ProductName: 'phone', Price: 100, Rating: 2, FreeDelivery: false },
       { ProductName: 'Shirt', Price: 400, Rating: 4, FreeDelivery: true },
         { ProductName: 'Cap', Price: 200, Rating: 5, FreeDelivery: false },
           { ProductName: 'Mobile Case', Price: 300, Rating: 2, FreeDelivery: true },
             { ProductName: 'Remote', Price: 400, Rating: 2.5, FreeDelivery: false },];
  employees: any;

             delete(index:number){
    this.products.splice(index,1);
  }
  PriceAsc(){
    this.products.sort((a:any,b:any)=>a.Price-b.Price);
 
  }
  PriceDsc(){
    
    this.products.sort((a:any,b:any)=>b.Price-a.Price);
  }
   RatingDsc(){
    
    this.products.sort((a:any,b:any)=>a.Rating-b.Rating);
  }
  RatingAsc(){
    
    this.products.sort((a:any,b:any)=>b.Rating-a.Rating);
  }
  applyDiscount(){
    this.products=this.products.map((ProductName:any)=>{
      ProductName.Price=ProductName.Price/2;
      return ProductName;
    }); 
  }
Name:string='';

  Filter(){
    this.products=this.products.filter((ProductName:any)=>ProductName.ProductName.includes(this.Name));  
  }
Tip(){
    this.products=this.products.map((ProductName:any)=>{
      ProductName.Price=ProductName.Price+30;
      return ProductName;
    });
  }
Total(){
    var totalCost=this.products.reduce((sum:any,ProductName:any)=>sum+ProductName.Price,0);
    alert(totalCost);
  }
  ProductName:string='';
  Price:number=0;
  Rating:number=0;
  FreeDelivery: boolean= true;
  addProduct(){
  var user={
        ProductName:this.ProductName,
        Price:this.Price,
        Rating:this.Rating,
        FreeDelivery:this.FreeDelivery
      }
      this.products.unshift(user)
      }
  freeDelivery(){

  }
}
