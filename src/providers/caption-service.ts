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
  private defaultCaptions: Array<string> = [
    "Alternative facts are free",
    "The alternative to \"fact\" is \"fictions.\"",
    "Alternative facts are not facts. They're falsehoods",
    "Doublethink",
    "post-truth",
    "create a different understanding of reality",
    "truthiness",
    "#alternative facts",
    "#SeanSpicerSays",
    "#SeanSpicerFacts",
    "#spicerfacts"
  ];

  constructor(private http: Http) {
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

  private extractCaptionFromResult(result: any): string {
    if (result.description && result.description.captions && result.description.captions.length > 0) {
      return result.description.captions[0].text;
    }

    return "funny caption";
  }

  getRandomDefaultCaption(): string {
    return this.defaultCaptions[Math.floor(Math.random() * this.defaultCaptions.length)];
  }
}