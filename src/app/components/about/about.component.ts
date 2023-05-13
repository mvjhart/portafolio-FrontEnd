import { Component } from '@angular/core';
import { Experiencia } from 'src/app/Interfaces/IExperiencia';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  listaExperiencias:Experiencia[]=[];
  
  expView:Boolean = false;
  subscription?:Subscription;

  constructor(
    private dataS:DataService,
    private uiS:UiService,
  ){
    this.dataS.obtenerExperiencias().subscribe((experiencias)=>(this.listaExperiencias=experiencias));
    this.subscription = this.uiS.onToggleExpView().subscribe( (v) => (this.expView = v));
  }

  agregarExperiencia(experiencia:Experiencia){
    //console.log(experiencia);
    this.dataS.agregarExperiencia(experiencia)
      .subscribe((e)=>(this.listaExperiencias.push(e)));
      this.uiS.toggleExpView();
      this.uiS.reloadCurrentRoute();
  }

  toggleAddExp(){
    this.uiS.toggleExpView();
  }

}
