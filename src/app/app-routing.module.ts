import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { MailComponent } from './mail/mail.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { PintrestComponent } from './pintrest/pintrest.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentComponent } from './student/student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreatStudentComponent } from './creat-student/creat-student.component';
import { VehiclesDetailsComponent } from './vehicles-details/vehicles-details.component';
import { AuthenticationGuard } from './authentication.guard';
import { Sibling1Component } from './sibling1/sibling1.component';
import { ParentComponent } from './parent/parent.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateAccountComponent } from './create-account/create-account.component';



const routes: Routes =[
  // default routing  
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],children:[
   {path:'home',component:HomeComponent},  
    // {path:'gallery',component:GalleryComponent},
    // {path:'welcome',component:WelcomeComponent},
    // {path:'DataBinding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'BMI',component:BMIComponent},
    {path:'Directives',component:DirectivesComponent},
    {path:'Employee',component:EmployeeComponent},
    {path:'Products',component:ProductsComponent},
    {path:'Vehicles',component:VehiclesComponent},
    {path:'mail',component:MailComponent},
    {path:'Flipkart',component:FlipkartComponent},
    {path:'Pintrest',component:PintrestComponent},
    {path:'WeatherReport',component:WeatherReportComponent},
    {path:'createVehicle',component:CreateVehicleComponent},
    {path:'Student',component:StudentComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'createaccount',component:CreateAccountComponent},
    {path:'createUser',component:CreateUserComponent},
    {path:'edit-StudentDetails/:id',component:CreatStudentComponent},
    {path:'creatStudent',component:CreatStudentComponent},
    {path:'student-details/:id',component:StudentDetailsComponent},
    {path:'Vehicles-details/:id',component:VehiclesDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'sibling1',component:Sibling1Component},
    {path:'parent',component:ParentComponent},
    {path:'payments',loadChildren:() => import('./payments/payments.module')
    .then(m => m.PaymentsModule)
    },
  ] },// parent routing

  
   {path:'**',component:ErrorComponent},//wildcard/error routing

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
