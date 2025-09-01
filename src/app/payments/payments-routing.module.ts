import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { UpiComponent } from './upi/upi.component';
import { CodComponent } from './cod/cod.component';

const routes: Routes = [
  {path:'card',component:CardComponent},
  {path:'upi',component:UpiComponent},
  {path:'cod',component:CodComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
