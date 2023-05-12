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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ProyectosComponent,
    AboutComponent,
    InicioComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
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
