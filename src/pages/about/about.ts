import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  private _navCtrl : NavController;
 
  constructor(public navCtrl: NavController) {
    this._navCtrl = navCtrl;
  }
  
}