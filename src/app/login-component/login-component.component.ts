import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})



export class LoginComponent {
  loginForm: FormGroup;
  submitted:boolean;
  errorMessage:string='';
  constructor(private fb: FormBuilder,public route:Router){
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }
  
  login() {
    this.submitted=true;
    this.errorMessage='';
    if(this.loginForm.valid && this.loginForm.value.username==='12345' && this.loginForm.value.password==='qlicket'){
       this.route.navigateByUrl('/air-ticket')
    }
    else if(this.loginForm.valid ){
       this.errorMessage='Invalid Credential'
    }
  }
}

