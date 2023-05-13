import { Component, Input } from '@angular/core';
import { Proyecto } from 'src/app/Interfaces/IProyecto';

@Component({
  selector: 'app-item-proyectos',
  templateUrl: './item-proyectos.component.html',
  styleUrls: ['./item-proyectos.component.css']
})
export class ItemProyectosComponent {
  listaProyectos:Proyecto[]=[];

  @Input() proyecto:Proyecto=this.listaProyectos[0];

}
