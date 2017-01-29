import { Component } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import { QuotesService } from '../../providers/quotes-service';
import { MixpanelService } from '../../providers/mixpanel-service';
import { CaptionsDB } from '../../providers/caption-db';
import { Network } from 'ionic-native';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})

export class GalleryPage {
  caption: string;
  deviceHeight: number;
  deviceWidth: number;
  randomImgUrl: string;

  constructor(public navCtrl: NavController, public captionDB: CaptionsDB, platform: Platform, public loadingController: LoadingController, public quotesService: QuotesService, public mixPanel: MixpanelService) {
    platform.ready().then(() => {
      this.deviceHeight = platform.height();
      this.deviceWidth = platform.width();
    });
  }

  ionViewWillEnter() {
    this.mixPanel.track("Gallery Page Loaded");
    this.mixPanel.track("Loading initial fact");
    this.loadFact();
  }

  nextFact() {
    this.mixPanel.track("Loading next fact");
    this.loadFact();
  }

  loadFact() {
    if (Network.type === "none") {
      this.randomImgUrl = "assets/error.svg";
      this.caption = "No Network connection...reconnect & try again...";
      return;
    }

    this.caption = this.captionDB.getRandomDefaultCaption();
    let loading = this.loadingController.create({
      spinner: 'circles',
      content: this.quotesService.getTrumpQuote()
    });
    loading.present();

    var randomId = new Date().getTime();
    this.randomImgUrl = 'https://unsplash.it/' + this.deviceWidth + '/' + this.deviceHeight + '/?random&' + randomId;

    this.caption = this.captionDB.getRandomCaption();

    setTimeout(() => {
      loading.dismiss();
      this.mixPanel.track("Fact successfully loaded");
    }, 2000);
  }
}