import { Component } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import { QuotesService } from '../../providers/quotes-service';
import { MixpanelService } from '../../providers/mixpanel-service';
import { CaptionsDB } from '../../providers/caption-db';
import { ImageService } from '../../providers/image-service';
import { Network } from 'ionic-native';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})

export class GalleryPage {
  caption: string;

  randomImgUrl: string;

  constructor(public navCtrl: NavController, public captionDB: CaptionsDB, platform: Platform, public loadingController: LoadingController, public quotesService: QuotesService, public mixPanel: MixpanelService, public imageService : ImageService) {
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

    this.imageService.getRandomImage().then((imgUrl) => {
      this.randomImgUrl = imgUrl;
      return imgUrl;
    }).then(() => {
      this.caption = this.captionDB.getRandomCaption();
      loading.dismiss();
      this.mixPanel.track("Fact successfully loaded");
    });
  }
}