import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AirTicketComponent } from './air-ticket.component';
import { AirTicketRouting } from './air-ticket-routing';



@NgModule({
  imports: [
    CommonModule,
    AirTicketRouting,
    
  ],
  declarations: [
    AirTicketComponent
  ]
})
export class AirTicketModule {
}
