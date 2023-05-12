import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  form:FormGroup;

  username:string="Nombre de Usuario";
  password:string="Contraseña";
  userHelpTxt:string="El nombre de usuario es requerido.";
  passHelpTxt:string="Tiene que tener más de 8 carácteres."

 constructor(
  private authServ:AuthService,
  private fBuild:FormBuilder,
  private ruta:Router
 ){

  this.form = this.fBuild.group({
    nombreUsuario:['',[Validators.required]],
    password:['', [Validators.required, Validators.minLength(8)]]
  });

 }

get nombreUsuario(){
  return this.form.get('nombreUsuario');
}

get Password(){
  return this.form.get('password');
}

onEnviar(event:Event){
  event.preventDefault;
  console.log(this.form.value);
  this.authServ.iniciarSession(this.form.value).subscribe(data =>{
    console.log("DATA: " + JSON.stringify(data));
    this.ruta.navigate(['/']);

  })
}

}
