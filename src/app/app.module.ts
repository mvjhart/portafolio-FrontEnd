import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// ROUTING MODULE
import { AppRoutingModule } from './app-routing.module';

// MY SERVICES
import { InterceptorService } from './services/interceptor.service';
import { AuthService } from './services/auth.service';
import { UiService } from './services/ui.service';
import { GuardGuard } from './services/guard.guard';
import { DataService } from './services/data.service';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AboutComponent } from './components/about/about.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { SkillsComponent } from './components/about/skills/skills.component';
import { ExperienciasComponent } from './components/about/experiencias/experiencias.component';
import { AddSkillComponent } from './components/about/add-skill/add-skill.component';
import { AddExpeComponent } from './components/about/add-expe/add-expe.component';
import { AddProyectoComponent } from './components/proyectos/add-proyecto/add-proyecto.component';
import { BotonComponent } from './components/boton/boton.component';
import { ItemProyectosComponent } from './components/proyectos/item-proyectos/item-proyectos.component';
import { ListaSkillsComponent } from './components/about/skills/lista-skills/lista-skills.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditAboutComponent } from './components/about/edit-about/edit-about.component';
import { AboutCardComponent } from './components/about/about-card/about-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ProyectosComponent,
    AboutComponent,
    InicioComponent,
    ErrorComponent,
    LoginComponent,
    SkillsComponent,
    ExperienciasComponent,
    AddSkillComponent,
    AddExpeComponent,
    AddProyectoComponent,
    BotonComponent,
    ItemProyectosComponent,
    ListaSkillsComponent,
    EditAboutComponent,
    AboutCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true},
    AuthService,
    UiService,
    GuardGuard,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
