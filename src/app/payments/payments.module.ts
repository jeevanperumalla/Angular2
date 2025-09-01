import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { UpiComponent } from './upi/upi.component';
import { CardComponent } from './card/card.component';
import { CodComponent } from './cod/cod.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';


@NgModule({
  declarations: [
    UpiComponent,
    CardComponent,
    CodComponent,
    WeatherReportComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
