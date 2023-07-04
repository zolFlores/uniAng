import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
    constructor (private httpClient: HttpClient){}

    guardarPersonas(personas: Persona[]){
        console.log (personas);
        this.httpClient.put('https://listado-personas-74e32-default-rtdb.firebaseio.com/datos.json',personas)
        .subscribe(
            response=>console.log("resultado de guardar personas" + response),
            error=>console.log ("Error al guardar personas" + error)
    );
    }

    cargarPersonas(){
        return this.httpClient.get('https://listado-personas-74e32-default-rtdb.firebaseio.com/datos.json');
 }
    
 modificarPersona(indice:number, persona:Persona){
   let url:string;
   url='https://listado-personas-74e32-default-rtdb.firebaseio.com/datos/' + indice + '.json';
   this.httpClient.put(url,persona)
   .subscribe (
    response=>console.log("resgitro modifcado" + indice + ' ' + response),
    error=>console.log ("error numero" + error)
   );
 }
 eliminarPersona(indice:number){
    let url:string;
    url='https://listado-personas-74e32-default-rtdb.firebaseio.com/datos/' + indice + '.json';
    this.httpClient.delete(url)
    .subscribe (
     response=>console.log("resgitro eliminado" + indice + ' ' + response),
     error=>console.log ("error al eliminar numero" + error)
    );
    
 }
}