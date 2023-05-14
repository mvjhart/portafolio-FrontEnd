import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { About } from 'src/app/Interfaces/IAbout';
import { Experiencia } from 'src/app/Interfaces/IExperiencia';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.css']
})
export class AboutCardComponent {
  
  listaExperiencias:Experiencia[]=[];
  about:About={id:0,nombre:'', miniIntro:'', goals:'', email:'', country:'', interest:''};
  expView:Boolean = false;

  subscription?:Subscription;

  constructor(
    private dataS:DataService,
    private uiS:UiService
  ){
    this.dataS.obtenerAbout().subscribe((a)=>(this.about = a));
    this.dataS.obtenerExperiencias().subscribe((experiencias)=>(this.listaExperiencias=experiencias));
    this.subscription = this.uiS.onToggleExpView().subscribe( (v) => (this.expView = v));
  }

  agregarExperiencia(experiencia:Experiencia){
    this.dataS.agregarExperiencia(experiencia)
      .subscribe((e)=>(this.listaExperiencias.push(e)));
      this.uiS.toggleExpView();
      this.uiS.reloadCurrentRoute();
  }

  borrarExperiencia(experiencia:Experiencia){
    this.dataS.borrarExperiencia(experiencia)
      .subscribe(()=>(this.listaExperiencias = this.listaExperiencias.filter(s=>s.id !== experiencia.id)));

  }

  actualizarExperiencia(exp:Experiencia){
    console.log(exp);
    let index = this.listaExperiencias.findIndex(item => item.id === exp.id)
    this.dataS.actualizarExperiencia(exp).subscribe(()=> (this.listaExperiencias[index] = exp));
    this.uiS.reloadCurrentRoute();
  }

  toggleAddExp(){
    this.uiS.toggleExpView();
  }

}
