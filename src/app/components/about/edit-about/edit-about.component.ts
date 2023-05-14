import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { About } from 'src/app/Interfaces/IAbout';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent {

  form:FormGroup;

  subscription?:Subscription;

  @Output() updateAbout:EventEmitter<About> = new EventEmitter();

  constructor(
    private fBuild:FormBuilder,
    private uiS:UiService
  ){
    this.form = this.fBuild.group({
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
    console.log(this.form.value);
  }

}
