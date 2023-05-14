import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
  editAboutView:Boolean=false;

  //subscription?:Subscription;

  constructor(
    private uiS:UiService
  ){

  }

  editAboutToggle(){
    this.editAboutView = !this.editAboutView;
    
    if(this.editAboutView){
      console.log("CLICK EDITAR ABOUT");
    }
  }

}