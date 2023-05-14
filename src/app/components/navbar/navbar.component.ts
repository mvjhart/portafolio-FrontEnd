import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  itemUno:string="Inicio";
  itemDos:string="About";
  itemTres:string="Proyectos";

  editUnlocked:Boolean = false;

  constructor(
    private uiServ:UiService
  ){

  }

  estaActiva(ruta:string):Boolean{
    return this.uiServ.hasSameRoute(ruta);
  }

  unlockEdit(){
    console.log("click!");
    
  }

}
