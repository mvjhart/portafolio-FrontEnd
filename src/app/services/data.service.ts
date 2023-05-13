import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../Interfaces/IProyecto';
import { Experiencia } from '../Interfaces/IExperiencia';
import { Skill } from '../Interfaces/ISkill';
import { About } from '../Interfaces/IAbout';

const httOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string="http://localhost:8080";
  aboutID:number=1;

  constructor(
    private http:HttpClient    
  ){

  }

// PROYECTOS

  obtenerProyectos():Observable<Proyecto[]>{
    //console.log(this.http.get<any>(this.url+"/proyectos/lista"));
    return this.http.get<Proyecto[]>(this.url+"/proyectos/lista");
  }

  agregarProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(this.url + "/proyectos/agregar", proyecto, httOptions);
  }

  borrarProyecto(proyecto:Proyecto):Observable<Proyecto>{
    const reqUrl = `${this.url}/proyectos/borrar/${proyecto.id}`
    //console.log(reqUrl);
    return this.http.delete<Proyecto>(reqUrl);

  }

  actualizarProyecto(proyecto:any):Observable<any>{
    const reqUrl = `${this.url}/proyectos/update/${proyecto.id}`;
    console.log(reqUrl);
    console.log(proyecto);
    return this.http.put<any>(reqUrl, proyecto, httOptions);
  }

// EXPERIENCIAS

  obtenerExperiencias():Observable<Experiencia[]>{
    //console.log(this.http.get<any>(this.url+"/experiencias/lista"));
    return this.http.get<Experiencia[]>(this.url+"/experiencias/lista");
  }

  agregarExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.url + "/experiencias/agregar", experiencia, httOptions);
  }

  borrarExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    const reqUrl = `${this.url}/experiencias/borrar/${experiencia.id}`
    //console.log(reqUrl);
    return this.http.delete<Experiencia>(reqUrl);

  }

  actualizarExperiencia(experiencia:any):Observable<any>{
    const reqUrl = `${this.url}/experiencias/update/${experiencia.id}`;
    console.log(reqUrl);
    console.log(experiencia);
    return this.http.put<any>(reqUrl, experiencia, httOptions);
  }

// SKILLS

  obtenerSkills():Observable<Skill[]>{
    //console.log(this.http.get<any>(this.url+"/skills/lista"));
    return this.http.get<Skill[]>(this.url+"/skills/lista");
  }

  agregarSkill(skill:Skill):Observable<Skill>{
    return this.http.post<Skill>(this.url + "/skills/agregar", skill, httOptions);
  }

  borrarSkill(skill:Skill):Observable<Skill>{
    const reqUrl = `${this.url}/skills/borrar/${skill.id}`
    //console.log(reqUrl);
    return this.http.delete<Skill>(reqUrl);

  }

  actualizarSkill(skill:any):Observable<any>{
    const reqUrl = `${this.url}/skills/update/${skill.id}`;
    console.log(reqUrl);
    console.log(skill);
    return this.http.put<any>(reqUrl, skill, httOptions);
  }  

  // ABOUT

  obtenerAbout():Observable<About>{
    const reqUrl = `${this.url}/about/ver/${this.aboutID}`;
    return this.http.get<About>(reqUrl);
  }

  actualizarAbout(about:any):Observable<any>{
    const reqUrl = `${this.url}/about/update/${about.id}`;
    console.log(reqUrl);
    console.log(about);
    return this.http.put<any>(reqUrl, about, httOptions);
  }  


}
