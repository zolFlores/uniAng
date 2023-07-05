import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de Personas';
  resultadoPadre!:number;
  
  recibeSuma (res: number){
    this.resultadoPadre=res;
  }
  
  constructor (private loginService: LoginService){}

ngOnInit ():void{

  firebase.initializeApp({
      apiKey: "AIzaSyB5q-VjXIhNPDYDskvk1Ll71awtZuQeLVM",
      authDomain: "listado-personas-74e32.firebaseapp.com"
  })
}

isAutentificado(){
  return this.loginService.isAutentificado();
}

salir(){
  this.loginService.logOut();
}

}


