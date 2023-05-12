import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {

@Input() text:string="";
@Output() botonClick = new EventEmitter();


onClick(){
  this.botonClick.emit();
}

}
