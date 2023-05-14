import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  itemUno:string="About";
  itemDos:string="Proyectos";

  constructor(
    private uiS:UiService
  ){

  }

  estaActiva(ruta:string):Boolean{
    return this.uiS.hasSameRoute(ruta);
  }

}
