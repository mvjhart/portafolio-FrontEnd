import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from 'src/app/Interfaces/ISkill';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { faRectangleXmark } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-skills',
  templateUrl: './lista-skills.component.html',
  styleUrls: ['./lista-skills.component.css']
})
export class ListaSkillsComponent {

  form:FormGroup;
  listaSkills:Skill[]=[];
  typeActive:string="Coding";
  xMark= faRectangleXmark;
  eMark= faEdit;
  modoEdicion:Boolean=true;
  skillEditView:Boolean=false;

  subscription?:Subscription;

  @Input() skill:Skill=this.listaSkills[0];
  @Output() deleteSkill:EventEmitter<Skill> = new EventEmitter();
  @Output() updateSkill:EventEmitter<Skill> = new EventEmitter();

  constructor(
    private uiS:UiService,
    private fBuild:FormBuilder
  ){
    this.subscription = this.uiS.onToggleType().subscribe( (t) => ( this.typeActive = t));
    this.form = this.fBuild.group({
      id:[],
      name:['',[Validators.required]],
      tipo:['', [Validators.required, Validators.pattern('Graphic|Coding|Others')]],
      nivel:['', [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern('[0-9]*')]]

    })
  }

  get Name(){
    return this.form.get('name');
  }

  get Tipo(){
    return this.form.get('tipo');
  }
  
  get Nivel(){
    return this.form.get('nivel');
  }

  editToggle(skill:Skill){
    this.skillEditView=!this.skillEditView;
    if(this.skillEditView){
      this.form = this.fBuild.group({
        id:[skill.id],
        name:[skill.name,[Validators.required]],
        tipo:[skill.tipo, [Validators.required, Validators.pattern('Graphic|Coding|Others')]],
        nivel:[skill.nivel, [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern('[0-9]*')]]
  
      }) 
    }
  }

  onEnviar(event:Event){
    event.preventDefault;
    // console.log(this.form.value);
    this.updateSkill.emit(this.form.value);
  }

  xClick(skill:Skill){
    let windowText="Realmente quieres borrar la siguiente skill: " + skill.name;
    if( confirm(windowText) === true){
      this.deleteSkill.emit(skill);  
    }
  }

}
