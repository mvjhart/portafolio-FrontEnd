import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent {

  proyecto:FormGroup;

  constructor(
    private fBuild:FormBuilder
  ){
    this.proyecto = this.fBuild.group({
      titulo:['',[Validators.required]],
      descripcion:[''],
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
    console.log(this.proyecto.value);
  }

}
