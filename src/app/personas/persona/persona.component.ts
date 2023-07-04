import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonaService } from '../../Persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private  personaService: PersonaService) { }

  titulo = 'Listado de Personas';
  
  emitirSaludo(){
      this.personaService.saludar.emit (this.indice);
  }


  ngOnInit(): void {
  }

}
