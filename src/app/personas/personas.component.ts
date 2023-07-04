import { Component } from '@angular/core';
import { PersonaService } from '../Persona.service';
import { Persona } from '../persona.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  constructor (
    private personaService:PersonaService,
    private router: Router
  ){}

  personas: Persona[] = [];

  ngOnInit(): void {
   this.personaService.obtenerPersonas().subscribe(
    (personas:Persona[])=>{
      this.personas=personas;
      this.personaService.setPersonas(personas);
    }
   );
  }

  agregar(){
     this.router.navigate(['personas/agregar']);
  }
}
