import { Component } from '@angular/core';


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
  
}


