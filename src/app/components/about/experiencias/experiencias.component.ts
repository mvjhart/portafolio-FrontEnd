import { Component, Input } from '@angular/core';
import { Experiencia } from 'src/app/Interfaces/IExperiencia';


@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {

  listaExperiencias:Experiencia[]=[];

  @Input() experiencia:Experiencia=this.listaExperiencias[0];

}
