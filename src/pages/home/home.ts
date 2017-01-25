import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CaptionService } from '../../providers/caption-service';
import { ImageService } from '../../providers/image-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private _captionService: CaptionService;
  private _imgService: ImageService;
  randomImgUrl: string;
  caption: string;

  constructor(public navCtrl: NavController, captionService: CaptionService, imgService: ImageService) {
    this._captionService = captionService;
    this._imgService = imgService;
  }

  ionViewWillEnter() {
    this._imgService.getRandomImage()
      .then((url) => this.setImgUrl(url))
      .then((url) => this._captionService.getImgCaption(url))
      .then((caption) => this.setCaption(caption));
  }

  setImgUrl(imgUrl) {
    this.randomImgUrl = imgUrl;

    return imgUrl;
  }

  setCaption(txt) {
    this.caption = txt;
  }
}