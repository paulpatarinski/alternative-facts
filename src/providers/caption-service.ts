import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

/*
  Generated class for the CaptionService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CaptionService {
  private _http;

  constructor(public http: Http) {
    this._http = http;
  }

  getImgCaption(imgUrl: string): Promise<string> {
    let captionUrl = "https://westus.api.cognitive.microsoft.com/vision/v1.0/describe?maxCandidates=1";
    let apiKey = '22c5ac579cd44911958b4c6186d83b17';
    var body = {
      "url": imgUrl
    };
    var headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Ocp-Apim-Subscription-Key', apiKey);

    return this.http
      .post(captionUrl, body, { headers: headers })
      .toPromise()
      .then(response => response.json())
      .then((json) => this.extractCaptionFromResult(json));
  }

  extractCaptionFromResult(result: any): string {
    if (result.description && result.description.captions && result.description.captions.length > 0) {
      return result.description.captions[0].text;
    }

    return "funny caption";
  }
}