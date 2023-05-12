import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Skill } from 'src/app/Interfaces/ISkill';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent {

  skill:FormGroup;

  @Output() addSkill:EventEmitter<Skill>= new EventEmitter;

  constructor(
    private fBuild:FormBuilder,
    private uiS:UiService
  ){
    this.skill = this.fBuild.group({
      name:['',[Validators.required]],
      tipo:['', [Validators.required, Validators.pattern('Graphic|Coding|Others')]],
      nivel:['', [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern('[0-9]*')]]
    });
  }

  get Name(){
    return this.skill.get('name');
  }

  get Tipo(){
    return this.skill.get('tipo');
  }
  
  get Nivel(){
    return this.skill.get('nivel');
  }

  onEnviar(event:Event){
    event.preventDefault;
    //console.log(this.skill.value);
    this.addSkill.emit(this.skill.value);
  }

  toggleSkillView(){
    this.uiS.toggleSkillView();
  }

}
