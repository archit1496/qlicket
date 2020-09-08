import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AirTicketComponent } from './air-ticket.component';



const routes: Routes = [
    { path: 'air-ticket', component: AirTicketComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirTicketRouting {
}
