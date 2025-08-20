import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesComponent } from './vehicles/vehicles.component';


const routes: Routes = [
  // default routing 
  {path:'',component:LoginComponent},
  {path:'dashboard', component:DashboardComponent,children:[
    {path:'home',component:HomeComponent}, 
    // {path:'gallery',component:GalleryComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'DataBinding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'BMI',component:BMIComponent},
    {path:'Directives',component:DirectivesComponent},
    {path:'Employee',component:EmployeeComponent},
    {path:'Products',component:ProductsComponent},
    {path:'Vehicles',component:VehiclesComponent},
  
  ] },// parent routing
  
   {  path:'**',component:ErrorComponent},//wildcard/error routing

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
