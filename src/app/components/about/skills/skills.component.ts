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

  actualizarSkill(s:Skill){
    //console.log(s);
    let index = this.listaSkills.findIndex(item => item.id === s.id)
    this.dataS.actualizarSkill(s).subscribe(()=> (this.listaSkills[index] = s));
    this.uiS.reloadCurrentRoute();
  }

  borrarSkill(skill:Skill){
    this.dataS.borrarSkill(skill)
      .subscribe(()=>(this.listaSkills = this.listaSkills.filter(s=>s.id !== skill.id)));
  }


  toggleAddSkill(){
    this.uiS.toggleSkillView();
  }

  toggleType(event:Event){
    this.uiS.toggleType((<HTMLInputElement>event.target).value);
  }

}
