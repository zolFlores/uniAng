import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonaService } from '../../Persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formPersona',
  templateUrl: './formPersona.component.html',
  styleUrls: ['./formPersona.component.css'],

})
export class formPersonaComponent  {
  


nombreI:string = '';
apellidoI:string = '';
index:number;
modoEdicion:number;


    constructor(
       private personaseService: PersonaService,
       private router: Router,
       private route: ActivatedRoute){
      this.personaseService.saludar.subscribe((indice:number)=>alert("el indice es:" + indice));
    }
    
    
    onGuardarPersona(){
       let persona1 = new Persona(
       this.nombreI,
       this.apellidoI);
       
       if(this.modoEdicion!=null){
        this.personaseService.modificarPersona (this.index, persona1);
       }else{
        this.personaseService.personaAgregada(persona1);
       }
      
       this.router.navigate(['personas']);
    }

    ngOnInit(): void {
      this.index = this.route.snapshot.params ['id'];
       if (this.index){
        console.log (this.index);
          let persona:Persona=this.personaseService.encontrarPersona(this.index)
          this.nombreI = persona.nombre;
          this.apellidoI= persona.apellido;
          this.modoEdicion=+this.route.snapshot.queryParams['modoEdicion']
       }
    }

    eliminarPersona(){
      if (this.modoEdicion!=null){
        this.personaseService.eliminarPersona(this.index);
        this.router.navigate(["/personas"]) ;
      }
    }
}
