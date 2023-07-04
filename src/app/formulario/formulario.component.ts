import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
 operandoA: number ;
  operandoB: number;


  
  @Output ()
  emiteSuma = new EventEmitter<number>();

  suma(){
    let resul =this.operandoA + this.operandoB
    this.emiteSuma.emit(resul);
  }

}
