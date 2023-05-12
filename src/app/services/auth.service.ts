import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string="http://localhost:8080/auth/login";
  currentUserSubject: BehaviorSubject<any>;

  constructor(
    private http:HttpClient
  ) { 
    console.log("Servicio de autenticacion está corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
  }
  
  iniciarSession(credenciales:any):Observable<any>{
    console.log(credenciales);
    //console.log(this.url)
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  get UsuarioAutenticado(){
    //console.log(this.currentUserSubject.value);
    return this.currentUserSubject.value;
  }

}
