import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor (private loginService: LoginService){

}

ngOnInit(){

}
 login(form:NgForm){
  const email=form.value.email;
  const password = form.value.password;
  this.loginService.login(email,password); 
 }

}
