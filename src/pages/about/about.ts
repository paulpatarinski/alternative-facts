import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MixpanelService } from '../../providers/mixpanel-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  private _navCtrl: NavController;

  constructor(public navCtrl: NavController, public mixPanel: MixpanelService) {
    this._navCtrl = navCtrl;
  }

  ionViewWillEnter() {
    this.mixPanel.track("About Page Loaded");
  }

}