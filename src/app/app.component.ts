import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { MixpanelService } from '../providers/mixpanel-service';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, mixpanel: MixpanelService) {
    platform.ready().then(() => {
      if ((<any>window).calabash) {
        (<any>window).calabash.start(() => {
          console.log('Calabash started')
        }, (err) => {
          console.log(err);
        });
      }

      mixpanel.init("8e61a5c5b1103da23c2088f2dc44a043");

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
