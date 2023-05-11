import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    private router:Router
  ) { }

  hasSameRoute(ruta:string):Boolean{
    return this.router.url === ruta;
  }

}
