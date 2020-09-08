import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginModule } from './login-component/login-module';
import { AirTicketModule } from './air-ticket/air-ticket-module';

@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    loginModule,
    AirTicketModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
