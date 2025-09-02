import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MailComponent } from './mail/mail.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { PintrestComponent } from './pintrest/pintrest.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentComponent } from './student/student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreatStudentComponent } from './creat-student/creat-student.component';
import { VehiclesDetailsComponent } from './vehicles-details/vehicles-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FlipkartchildComponent } from './flipkartchild/flipkartchild.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AboutUsModule } from './about-us/about-us.module';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CapitalDirective } from './capital.directive';
import { RupeePipe } from './rupee.pipe';
import { TextAreaComponent } from './text-area/text-area.component';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ErrorComponent,
    HomeComponent,
    GalleryComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    DirectivesComponent,
    EmployeeComponent,
    ProductsComponent,
    VehiclesComponent,
    MailComponent,
    FlipkartComponent,
    PintrestComponent,
    WeatherReportComponent,
    CreateVehicleComponent,
    StudentComponent,
    CreateUserComponent,
    CreatStudentComponent,
    VehiclesDetailsComponent,
    Sibling1Component,
    Sibling2Component,
    ParentComponent,
    ChildComponent,
    FlipkartchildComponent,
    StudentDetailsComponent,
    AccountsComponent,
    CreateAccountComponent,
    CapitalDirective,
    RupeePipe,
    TextAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
