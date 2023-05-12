import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent {

  skill:FormGroup;
  tipo:string="";

  constructor(
    private fBuild:FormBuilder
  ){
    this.skill = this.fBuild.group({
      name:['',[Validators.required]],
      tipo:['', [Validators.required]],
      nivel:['', [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern('[0-9]*')]]
    });
  }

  get name(){
    return this.skill.get('name');
  }
  
  get nivel(){
    return this.skill.get('nivel');
  }

  onEnviar(event:Event){
    event.preventDefault;
    console.log(this.skill.value);
  }

}
