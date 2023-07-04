import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
    constructor (private httpClient: HttpClient){}

    guardarPersonas(personas: Persona[]){
        this.httpClient.put('https://listado-personas-74e32-default-rtdb.firebaseio.com/datos.json',personas)
        .subscribe(
            response=>console.log("resultado de guardar personas" + response),
            error=>console.log ("Error al guardar personas" + error)
    );
    }
}