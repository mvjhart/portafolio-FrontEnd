import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/Interfaces/IExperiencia';
import { faRectangleXmark } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {

  listaExperiencias:Experiencia[]=[];

  form:FormGroup;
  xMark= faRectangleXmark;
  eMark= faEdit;
  modoEdicion:Boolean=true;
  expEditView:Boolean=false;

  @Input() experiencia:Experiencia=this.listaExperiencias[0];
  @Output() deleteExperiencia:EventEmitter<Experiencia> = new EventEmitter();
  @Output() updateExperiencia:EventEmitter<Experiencia> = new EventEmitter();

  constructor(
    private fBuild:FormBuilder
  ){
    this.form = this.fBuild.group({
      rol:['',[Validators.required]],
      yearStart:['', [Validators.required, Validators.pattern('[0-9]*')]],
      yearEnd:['', [Validators.pattern('[0-9]*')]],
      company:['']
    });
  }

  get Rol(){
    return this.form.get('rol');
  }
  
  get YearStart(){
    return this.form.get('yearStart');
  }

  get YearEnd(){
    return this.form.get('yearEnd');
  }

  get Company(){
    return this.form.get('company');
  }

  editToggle(exp:Experiencia){
    this.expEditView=!this.expEditView;
    if(this.expEditView){
      this.form = this.fBuild.group({
        id:[exp.id],
        rol:[exp.rol,[Validators.required]],
        yearStart:[exp.yearStart, [Validators.required, Validators.pattern('[0-9]*')]],
        yearEnd:[exp.yearEnd, [Validators.pattern('[0-9]*')]],
        company:[exp.company]
      }) 
    }
  }

  onEnviar(event:Event){
  event.preventDefault;
  // console.log(this.form.value);
  this.updateExperiencia.emit(this.form.value);

  }

  xClick(exp:Experiencia){
    let windowText="Realmente quieres borrar el siguiente proyecto: " + exp.rol;
    if( confirm(windowText) === true){
      this.deleteExperiencia.emit(exp);  
    }
  }
}
