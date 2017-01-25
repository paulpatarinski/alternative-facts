import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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

  constructor(public http: Http) {
    this._http = http;
  }

  getRandomImage(): Promise<string> {
    let splashbaseUrl = "http://www.splashbase.co/api/v1/images/random";

    return this._http.get(splashbaseUrl)
      .toPromise()
      .then(this.extractImageUrl);
  }

  extractImageUrl(res: Response): string {
    let body = res.json();
    return body.url || {};
  }
}