import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.services';

@Injectable()
export class DataServices {
    constructor (private httpClient: HttpClient,
      private loginService : LoginService){}

    guardarPersonas(personas: Persona[]){
      const token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-74e32-default-rtdb.firebaseio.com/datos.json?auth='+ token,personas)
        .subscribe(
            response=>console.log("resultado de guardar personas" + response),
            error=>console.log ("Error al guardar personas" + error)
    );
    }

    cargarPersonas(){
      const token = this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-74e32-default-rtdb.firebaseio.com/datos.json?auth='+token);
 }
    
 modificarPersona(indice:number, persona:Persona){
   let url:string;
   const token = this.loginService.getIdToken();
   url='https://listado-personas-74e32-default-rtdb.firebaseio.com/datos/' + indice + '.json?auth='+token;
   this.httpClient.put(url,persona)
   .subscribe (
    response=>console.log("resgitro modifcado" + indice + ' ' + response),
    error=>console.log ("error numero" + error)
   );

 }


 eliminarPersona(indice:number){
  const token = this.loginService.getIdToken();
  let url:string;
    url='https://listado-personas-74e32-default-rtdb.firebaseio.com/datos/' + indice + '.json?auth='+token;
    this.httpClient.delete(url)
    .subscribe (
     response=>console.log("resgitro eliminado" + indice + ' ' + response),
     error=>console.log ("error al eliminar numero" + error)
    );
    
 }
}