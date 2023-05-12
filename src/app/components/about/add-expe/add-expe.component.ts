import { Component, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Experiencia } from 'src/app/Interfaces/IExperiencia';

@Component({
  selector: 'app-add-expe',
  templateUrl: './add-expe.component.html',
  styleUrls: ['./add-expe.component.css']
})
export class AddExpeComponent {

  experiencia:FormGroup;

  @Output() addExperiencia:EventEmitter<Experiencia> = new EventEmitter;

  constructor(
    private fBuild:FormBuilder
  ){
    this.experiencia = this.fBuild.group({
      rol:['',[Validators.required]],
      yearStart:['', [Validators.required, Validators.pattern('[0-9]*')]],
      yearEnd:['', [Validators.pattern('[0-9]*')]],
      company:['']
    });
  }

  get Rol(){
    return this.experiencia.get('rol');
  }
  
  get YearStart(){
    return this.experiencia.get('yearStart');
  }

  get YearEnd(){
    return this.experiencia.get('yearEnd');
  }

  get Company(){
    return this.experiencia.get('company');
  }

  onEnviar(event:Event){
    event.preventDefault;
    //console.log(this.experiencia.value);
    // console.log( typeof this.experiencia.get('yearStart')?.value);
    this.addExperiencia.emit(this.experiencia.value);
  }


}
