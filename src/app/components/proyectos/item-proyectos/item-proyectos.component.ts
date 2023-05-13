import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Proyecto } from 'src/app/Interfaces/IProyecto';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { faRectangleXmark } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-proyectos',
  templateUrl: './item-proyectos.component.html',
  styleUrls: ['./item-proyectos.component.css']
})
export class ItemProyectosComponent {
  listaProyectos:Proyecto[]=[];

  modoEdicion:Boolean=true;

  xMark= faRectangleXmark;
  eMark= faEdit;

  editProject:FormGroup;

  proEditView:boolean=false;

  @Input() proyecto:Proyecto=this.listaProyectos[0];
  @Output() deleteProyecto:EventEmitter<Proyecto> = new EventEmitter();
  @Output() updateProyecto:EventEmitter<Proyecto> = new EventEmitter();

  constructor(
    private fBuild:FormBuilder
  ){
    this.editProject = this.fBuild.group({
      id:[],
      titulo:['',[Validators.required]],
      descripcion:['', [Validators.maxLength(150)]],
      link:['']

    });
  }

  get Titulo(){
    return this.editProject.get('titulo');
  }

  get Descripcion(){
    return this.editProject.get('descripcion');
  }

  editToggle(proyecto:Proyecto){
    console.log("CLICK EDIT! " + proyecto.id);
    this.proEditView= !this.proEditView;

    if(this.proEditView){
      this.editProject = this.fBuild.group({
        id:[proyecto.id],
        titulo:[proyecto.titulo,[Validators.required]],
        descripcion:[proyecto.descripcion, [Validators.maxLength(150)]],
        link:[proyecto.link]
      })
    }
  }

  xClick(proyecto:Proyecto){
    let windowText="Realmente quieres borrar el siguiente proyecto: " + proyecto.titulo;
    if( confirm(windowText) === true){
      this.deleteProyecto.emit(proyecto);  
    }
  }

  enviarCambios(event:Event){
    event.preventDefault;
    console.log(this.editProject.value);
    this.updateProyecto.emit(this.editProject.value)
  }

}
