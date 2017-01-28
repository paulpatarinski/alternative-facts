import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      var statusBarOverlayWebView = platform.is('ios');

      StatusBar.overlaysWebView(statusBarOverlayWebView)
      StatusBar.backgroundColorByHexString("#95BDC1");

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      Splashscreen.hide();

      if ((<any>window).plugins && (<any>window).plugins.headerColor)
        (<any>window).plugins.headerColor.tint("#c6d9db");
    });
  }
}
