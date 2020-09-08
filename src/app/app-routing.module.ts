import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
 
  { path: '', loadChildren: () => import('../app/login-component/login-module').then(m => m.loginModule)},
  { path: '', loadChildren: () => import('../app/air-ticket/air-ticket-module').then(m => m.AirTicketModule)},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
