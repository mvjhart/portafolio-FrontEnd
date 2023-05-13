import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Skill } from 'src/app/Interfaces/ISkill';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  listaSkills:Skill[]=[];
  
  valueTypeOne:string="1";
  valueTypeTwo:string="2";
  valueTypeThree:string="3";
  skillView:Boolean = false;

  subSkillView?:Subscription;

  constructor(
    private dataS:DataService,
    private uiS:UiService,
  ){
    this.dataS.obtenerSkills().subscribe((skills)=>(this.listaSkills=skills));
    this.subSkillView = this.uiS.onToggleSkillView().subscribe( (skl) => ( this.skillView = skl));
    console.log(this.skillView);
  }

  agregarSkill(skill:Skill){
    //console.log(skill);
    this.dataS.agregarSkill(skill)
      .subscribe((s)=>(this.listaSkills.push(s)));
    this.uiS.toggleSkillView();
    this.uiS.reloadCurrentRoute();
  }


  toggleAddSkill(){
    this.uiS.toggleSkillView();
  }

  toggleType(event:Event){
    this.uiS.toggleType((<HTMLInputElement>event.target).value);
  }

}
