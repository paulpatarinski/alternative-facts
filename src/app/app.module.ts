import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { AboutPage } from '../pages/about/about';
import { CaptionService } from '../providers/caption-service';
import { ImageService } from '../providers/image-service';
import { AudioService } from '../providers/audio-service';
import { QuotesService } from '../providers/quotes-service';
import { MixpanelService } from '../providers/mixpanel-service';
import { CaptionsDB } from '../providers/caption-db';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GalleryPage,
    AboutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      platforms : {
        ios : {
          backButtonText: 'Home'
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GalleryPage,
    AboutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ImageService, CaptionService, AudioService, QuotesService, MixpanelService, CaptionsDB]
})
export class AppModule {}
