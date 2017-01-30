import { Component } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import { QuotesService } from '../../providers/quotes-service';
import { MixpanelService } from '../../providers/mixpanel-service';
import { CaptionsDB } from '../../providers/caption-db';
import { ImageService } from '../../providers/image-service';
import { Network, SocialSharing, Transfer } from 'ionic-native';
declare var cordova: any;

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})

export class GalleryPage {
  caption: string;

  randomImgUrl: string;

  constructor(public navCtrl: NavController, public captionDB: CaptionsDB, platform: Platform, public loadingController: LoadingController, public quotesService: QuotesService, public mixPanel: MixpanelService, public imageService: ImageService) {
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

  share() {
    var fileTransfer = new Transfer();
    var randomId = new Date().getTime();
    var imgName = `img_${randomId}.png`;
    var factNumber = Math.floor((Math.random() * 300) + 1);

    fileTransfer.download(this.randomImgUrl, `${cordova.file.dataDirectory}${imgName}`)
      .then((entry) => {
        return entry.toURL();
      })
      .then((localImgUrl) => {
        return SocialSharing.share(`Alternative Fact #${factNumber} ${this.caption}`, `Alternative Fact #${factNumber}`, localImgUrl, null);
      })
      .then(() => {
        this.mixPanel.track(`Successfully shared image`);
      })
      .catch((err) => {
        this.mixPanel.track(`Error sharing image => ${err}`);
      });
  }
}