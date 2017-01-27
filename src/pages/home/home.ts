import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private _navCtrl : NavController;
 
  constructor(public navCtrl: NavController) {
    this._navCtrl = navCtrl;
  }

  navigateToGallery(){
   this.navCtrl.push(GalleryPage);
  }
}