import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/Interfaces/ISkill';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-lista-skills',
  templateUrl: './lista-skills.component.html',
  styleUrls: ['./lista-skills.component.css']
})
export class ListaSkillsComponent {
  
  listaSkills:Skill[]=[];
  typeActive:string="Coding";
  subscription?:Subscription;

  @Input() skill:Skill=this.listaSkills[0];

  constructor(
    private uiS:UiService
  ){
    this.subscription = this.uiS.onToggleType().subscribe( (t) => ( this.typeActive = t));
  }

}
