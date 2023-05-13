import { Component } from '@angular/core';
import { Proyecto } from 'src/app/Interfaces/IProyecto';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  listaProyectos:Proyecto[]=[];
  proView:Boolean = false;

  subProView?:Subscription;

  constructor(
    private dataS:DataService,
    private uiS:UiService
  ){
    this.dataS.obtenerProyectos().subscribe((proyectos)=>(this.listaProyectos = proyectos));
    this.subProView = this.uiS.onToggleProView().subscribe( (p) => this.proView = p);
  }


  agregarProyecto(proyecto:Proyecto){
    //console.log(proyecto);
    this.dataS.agregarProyecto(proyecto)
      .subscribe((p)=> this.listaProyectos.push(p));
    this.uiS.toggleProView();
    this.uiS.reloadCurrentRoute();
  }

  actualizarProyecto(p:Proyecto){
    //console.log(p);
    let index = this.listaProyectos.findIndex(item => item.id === p.id)
    this.dataS.actualizarProyecto(p).subscribe(()=> (this.listaProyectos[index] = p));
  }

  borrarProyecto(proyecto:Proyecto){
    this.dataS.borrarProyecto(proyecto)
      .subscribe(()=>(this.listaProyectos = this.listaProyectos.filter(p=>p.id !== proyecto.id)))
  }

  toggleProView(){
    this.uiS.toggleProView();
  }

}
