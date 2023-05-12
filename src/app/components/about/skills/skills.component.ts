import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/Interfaces/ISkill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  listaSkills:Skill[]=[];

  @Input() skill:Skill=this.listaSkills[0];

}
