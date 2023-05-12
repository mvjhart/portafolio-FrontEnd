import { Component } from '@angular/core';
import { Experiencia } from 'src/app/Interfaces/IExperiencia';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  listaExperiencias:Experiencia[]=[];

  constructor(
    private dataS:DataService
  ){

  }

  agregarExperiencia(experiencia:Experiencia){
    console.log(experiencia);
    this.dataS.agregarExperiencia(experiencia)
      .subscribe((e)=>(this.listaExperiencias.push(e)));

  }

}
