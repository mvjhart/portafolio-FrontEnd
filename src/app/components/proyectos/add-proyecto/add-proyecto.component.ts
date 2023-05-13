import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Proyecto } from 'src/app/Interfaces/IProyecto';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent {

  proyecto:FormGroup;

  @Output() addProyecto:EventEmitter<Proyecto>= new EventEmitter;

  constructor(
    private fBuild:FormBuilder,
    private uiS:UiService
  ){
    this.proyecto = this.fBuild.group({
      titulo:['',[Validators.required]],
      descripcion:['', [Validators.maxLength(150)]],
      link:['']
    });
  }

  get Titulo(){
    return this.proyecto.get('titulo');
  }

  get Descripcion(){
    return this.proyecto.get('descripcion');
  }

  get Link(){
    return this.proyecto.get('link');
  }

  onEnviar(event:Event){
    event.preventDefault;
    //console.log(this.proyecto.value);
    this.addProyecto.emit(this.proyecto.value);
  }

  toggleProView(){
    this.uiS.toggleProView();
  }

}
