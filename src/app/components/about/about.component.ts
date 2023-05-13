import { Component } from '@angular/core';
import { Experiencia } from 'src/app/Interfaces/IExperiencia';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { About } from 'src/app/Interfaces/IAbout';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  listaExperiencias:Experiencia[]=[];
  about:About={id:0,nombre:'', miniIntro:'', goals:'', email:'', country:'', interest:''};
  editAboutView=false;
  
  expView:Boolean = false;
  subscription?:Subscription;

  form:FormGroup;

  constructor(
    private dataS:DataService,
    private uiS:UiService,
    private fBuild:FormBuilder
  ){
    this.dataS.obtenerExperiencias().subscribe((experiencias)=>(this.listaExperiencias=experiencias));
    this.dataS.obtenerAbout().subscribe((a)=>(this.about = a));
    this.subscription = this.uiS.onToggleExpView().subscribe( (v) => (this.expView = v));

    this.form = this.fBuild.group({
      id:[1],
      nombre:['',[Validators.required]],
      miniIntro:['', [Validators.maxLength(150)]],
      goals:['', [Validators.maxLength(150)]],
      email:['',[Validators.required, Validators.email]],
      country:[''],
      interest:['', [Validators.maxLength(150)]]

    });
  }


  get Nombre(){
    return this.form.get('nombre');
  }

  get MiniIntro(){
    return this.form.get('miniIntro');
  }

  get Goals(){
    return this.form.get('goals');
  }

  get Email(){
    return this.form.get('email');
  }

  get Country(){
    return this.form.get('country');
  }

  get Interest(){
    return this.form.get('interest');
  }

  onEnviar(event:Event){
    event.preventDefault;
    let a:About=this.form.value;
    console.log(a);
    this.dataS.actualizarAbout(this.form.value).subscribe(()=> (this.about = this.form.value));
    this.uiS.reloadCurrentRoute();
  }

  agregarExperiencia(experiencia:Experiencia){
    //console.log(experiencia);
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

  editAboutToggle(about:About){
    this.editAboutView = !this.editAboutView;
    if(this.editAboutView){
      this.form = this.fBuild.group({
        id:[1],
        nombre:[about.nombre,[Validators.required]],
        miniIntro:[about.miniIntro, [Validators.maxLength(150)]],
        goals:[about.goals, [Validators.maxLength(150)]],
        email:[about.email,[Validators.required, Validators.email]],
        country:[about.country],
        interest:[about.interest, [Validators.maxLength(150)]]
  
      });

    }
  }

}
