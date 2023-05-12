import { Component } from '@angular/core';
import { Experiencia } from 'src/app/Interfaces/IExperiencia';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Skill } from 'src/app/Interfaces/ISkill';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  listaExperiencias:Experiencia[]=[];
  listaSkills:Skill[]=[];
  
  expView:Boolean = false;
  skillView:Boolean = false;

  subscription?:Subscription;
  subSkillView?:Subscription;

  constructor(
    private dataS:DataService,
    private uiS:UiService,
    private ruta:Router
  ){
    this.dataS.obtenerExperiencias().subscribe((experiencias)=>(this.listaExperiencias=experiencias));
    this.dataS.obtenerSkills().subscribe((skills)=>(this.listaSkills=skills));
    this.subscription = this.uiS.onToggleExpView().subscribe( (v) => (this.expView = v));
    this.subSkillView = this.uiS.onToggleSkillView().subscribe( (skl) => ( this.skillView = skl));
  }

  agregarExperiencia(experiencia:Experiencia){
    //console.log(experiencia);
    this.dataS.agregarExperiencia(experiencia)
      .subscribe((e)=>(this.listaExperiencias.push(e)));
      this.uiS.toggleExpView();
      this.uiS.reloadCurrentRoute();
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

  toggleAddExp(){
    this.uiS.toggleExpView();
  }

}
