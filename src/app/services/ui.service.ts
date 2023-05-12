import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private expView:Boolean=false;
  skillView:Boolean = false;
  private subject = new Subject<any>();
  private subSkl = new Subject<any>();

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
  toggleSkillView(){
    this.skillView=!this.skillView;
    this.subSkl.next(this.skillView);
  }

  onToggleExpView():Observable<any>{
    return this.subject.asObservable();
  }

  onToggleSkillView():Observable<any>{
    return this.subSkl.asObservable();
  }

  reloadCurrentRoute(){
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(
      () => (this.router.navigate([currentUrl])));
  }

}
