import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
  updateAboutView:Boolean=false;
  expView:Boolean = false;
  firstItem:Boolean = true;
  secondItem:Boolean = false;

  titleFirstItem:string="Me";
  titleSecondItem:string="Skills";

  subscription?:Subscription;
  subExp?:Subscription;

  constructor(
    private uiS:UiService
  ){
    this.subscription = this.uiS.onUpdateAbout().subscribe((a)=> this.updateAboutView = a);
    this.subExp = this.uiS.onToggleExpView().subscribe((e)=> this.expView = e);
  }

  editAboutToggle(){

    this.uiS.toggleUpdateAbout();
  }

  onSecondItem(){

    if(this.firstItem){
      this.firstItem = false;
      this.secondItem = true;
    }

  }

  onFirstItem(){
    if(this.secondItem){
      this.firstItem = true;
      this.secondItem = false;
    }
  }

}