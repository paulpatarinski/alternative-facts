import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Platform } from 'ionic-angular';
import { MixpanelService } from './mixpanel-service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

/*
  Generated class for the ImageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ImageService {
  private _http;
  private deviceHeight: number;
  private deviceWidth: number;
  private errSvgPath = "assets/error.svg";

  constructor(public http: Http, private platform: Platform, private mixPanel: MixpanelService) {
    this._http = http;

    platform.ready().then(() => {
      this.deviceHeight = platform.height();
      this.deviceWidth = platform.width();
    });
  }

  getRandomImage(): Promise<string> {
    //Make the url unique otherwise same img is returned
    var randomId = new Date().getTime();
    let splashbaseUrl = `https://source.unsplash.com/random/${this.deviceWidth}x${this.deviceHeight}/?sig=${randomId}`;

    return this._http.get(splashbaseUrl, )
      .toPromise()
      .then((result) =>
        this.extractImageUrl(result)
      ).catch(err => {
        this.mixPanel.track(`Error => ${err}`);
        return this.errSvgPath;
      });
  }

  private extractImageUrl(res: Response): string {
    return res.url || this.errSvgPath;
  }
}