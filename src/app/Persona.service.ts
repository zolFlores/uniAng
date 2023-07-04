import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";
import { DataServices } from "./dataServices";


@Injectable()
export class PersonaService{
    personas: Persona[] = [
        new Persona('Juan','Perez'), 
        new Persona('Laura', 'Juarez'),
        new Persona('Karla', 'Lara')
      
    ];
    
    saludar= new EventEmitter<number>


    constructor(private loginservcice: LoggingService,
        private dataService: DataServices){}

    personaAgregada(persona: Persona){
        this.loginservcice.enviaMensajeAConsola("agregamos una persona: " + "persona.nombre");
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
    }
    

    eliminarPersona(i: number){
       this.personas.splice(i,1);

    }
   
}