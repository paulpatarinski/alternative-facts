import { Component } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { CaptionService } from '../../providers/caption-service';
import { ImageService } from '../../providers/image-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private _captionService: CaptionService;
  private _imgService: ImageService;
  caption: string;
  deviceHeight : number;
  deviceWidth : number;

  constructor(public navCtrl: NavController, captionService: CaptionService, imgService: ImageService, platform : Platform) {
    this._captionService = captionService;
    this._imgService = imgService;

    platform.ready().then(() => {
      this.deviceHeight = platform.height();
      this.deviceWidth = platform.width();
    });
  }

  ionViewWillEnter() {
    this._imgService.getRandomImage()
      .then((url) => this._captionService.getImgCaption(url))
      .then((caption) => this.setCaption(caption));
  }

  setCaption(txt) {
    this.caption = txt;
  }
}