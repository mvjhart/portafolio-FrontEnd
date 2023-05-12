import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'about', component:AboutComponent, canActivate:[GuardGuard]},
  {path:'proyectos', component:ProyectosComponent, canActivate:[GuardGuard]},
  {path:'login', component:LoginComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
