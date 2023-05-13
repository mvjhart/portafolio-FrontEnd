import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { About } from '../Interfaces/IAbout';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private expView:Boolean = false;
  private skillView:Boolean = false;
  private proView:Boolean = false;
  private typeActive:string = "Coding";

  private subject = new Subject<any>();
  private subSkl = new Subject<any>();
  private subPro = new Subject<any>();
  private subType = new Subject<any>();

  constructor(
    private router:Router
  ) { }

  hasSameRoute(ruta:string):Boolean{
    return this.router.url === ruta;
  }

  toggleExpView(){
    this.expView=!this.expView;
    this.subject.next(this.expView);
  }

  onToggleExpView():Observable<any>{
    return this.subject.asObservable();
  }

  toggleSkillView(){
    this.skillView=!this.skillView;
    this.subSkl.next(this.skillView);
  }

  onToggleSkillView():Observable<any>{
    return this.subSkl.asObservable();
  }

  toggleProView(){
    this.proView=!this.proView;
    this.subPro.next(this.proView);
  }

  onToggleProView():Observable<any>{
    return this.subPro.asObservable();
  }

  toggleType(valor:string){

    if(valor === "1"){
      this.typeActive="Coding";
      this.subType.next(this.typeActive);
      // console.log("el valor de typeActive es: " + this.typeActive);
    } else if (valor === "2"){
      this.typeActive="Graphic";
      this.subType.next(this.typeActive);
      // console.log("el valor de typeActive es: " + this.typeActive);
    } else {
      this.typeActive="Others";
      this.subType.next(this.typeActive);
      // console.log("el valor de typeActive es: " + this.typeActive);
    }

  }

  onToggleType():Observable<any>{
    return this.subType.asObservable();
  }

  reloadCurrentRoute(){
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(
      () => (this.router.navigate([currentUrl])));
  }

}
