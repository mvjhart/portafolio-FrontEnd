import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/Interfaces/ISkill';

@Component({
  selector: 'app-lista-skills',
  templateUrl: './lista-skills.component.html',
  styleUrls: ['./lista-skills.component.css']
})
export class ListaSkillsComponent {
  
  listaSkills:Skill[]=[];

  @Input() skill:Skill=this.listaSkills[0];

}
