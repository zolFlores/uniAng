import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";
import { DataServices } from "./dataServices";


@Injectable()
export class PersonaService{
  
    personas: Persona[] = [];
    
    
    saludar= new EventEmitter<number>

    setPersonas(personas:Persona[]){
            this.personas=personas;
    }

    constructor(private loginservcice: LoggingService,
        private dataService: DataServices){}

    obtenerPersonas(){
        return this.dataService.cargarPersonas();
    }

    personaAgregada(persona: Persona){
        this.loginservcice.enviaMensajeAConsola("agregamos una persona: " + persona.nombre);
        if (this.personas==null){
            this.personas=[];
        }
        this.personas.push( persona );
        this.dataService.guardarPersonas(this.personas);
      }

    encontrarPersona (i: number){
        let persona :Persona=this.personas[i];
        return persona;
    }

    modificarPersona(i: number, persona: Persona){
        let persona1 = this.personas[i]
        persona1.nombre= persona.nombre;
        persona1.apellido= persona.apellido;
        this.dataService.modificarPersona(i,persona);
    }
    

    eliminarPersona(i: number){
       this.personas.splice(i,1);
       this.dataService.eliminarPersona(i);
       //recargar el arreglo
       this.modificarPersonas(); 
    }
   
    modificarPersonas(){
        if (this.personas!=null){
            this.dataService.guardarPersonas(this.personas);
        }
    }
}