import { Component } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { CaptionService } from '../../providers/caption-service';
import { ImageService } from '../../providers/image-service';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})

export class GalleryPage {
  private _captionService: CaptionService;
  private _imgService: ImageService;
  caption: string;
  deviceHeight : number;
  deviceWidth : number;
  loading : boolean;
  randomImgUrl : string;

  constructor(public navCtrl: NavController, captionService: CaptionService, imgService: ImageService, platform : Platform) {
    this.loading = true;
    this._captionService = captionService;
    this._imgService = imgService;

    platform.ready().then(() => {
      this.deviceHeight = platform.height();
      this.deviceWidth = platform.width();
    });
  }

  ionViewWillEnter() {
    this.loading = true;
    var randomId = new Date().getTime();
    this.randomImgUrl = 'https://unsplash.it/' + this.deviceWidth + '/' + this.deviceHeight + '/?random&' + randomId;
    this._imgService.getRandomImage()
      .then((url) => this._captionService.getImgCaption(url))
      .then((caption) => this.setCaption(caption))
      .then(() => {
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        this.loading = false;
      });
  }

  setCaption(txt) {
    this.caption = txt;
  }
}