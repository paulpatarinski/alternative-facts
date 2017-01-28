import { Component } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import { CaptionService } from '../../providers/caption-service';
import { ImageService } from '../../providers/image-service';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})

export class GalleryPage {
  caption: string;
  deviceHeight: number;
  deviceWidth: number;
  randomImgUrl: string;

  constructor(public navCtrl: NavController, public captionService: CaptionService, public imgService: ImageService, platform: Platform, public loadingController: LoadingController) {
    platform.ready().then(() => {
      this.deviceHeight = platform.height();
      this.deviceWidth = platform.width();
    });
  }

  ionViewWillEnter() {
    let loading = this.loadingController.create({
       spinner: 'circles',
      content: 'Loading Please Wait...'
    });
    loading.present();

    var randomId = new Date().getTime();
    this.randomImgUrl = 'https://unsplash.it/' + this.deviceWidth + '/' + this.deviceHeight + '/?random&' + randomId;
    this.imgService.getRandomImage()
      .then((url) => this.captionService.getImgCaption(url))
      .then((caption) => this.setCaption(caption))
      .then(() => {
        loading.dismiss();
      })
      .catch((err) => {
        console.log(err);
        loading.dismiss();
      });
  }

  setCaption(txt) {
    this.caption = txt;
  }
}