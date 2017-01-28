import { Component , trigger, state, style, transition, animate} from '@angular/core';
import { NavController} from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';
import { AboutPage } from '../about/about';
import { AudioService } from '../../providers/audio-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
     trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0'}),
        animate('2000ms ease-in-out')
      ])
    ]),
      //For the background detail
    trigger('flyInBottomMedium', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0)'}),
        animate('1500ms ease-in-out')
      ])
    ]),
    //For the background detail
    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0)'}),
        animate('1000ms ease-in-out')
      ])
    ]),
    trigger('flip', [
      state('flipped', style({
        transform: 'rotate(180deg)'
      })),
        state('notFlipped', style({
        transform: 'rotate(-360deg)'
      })),
      transition('* => flipped', animate('400ms ease-in')),
      transition('flipped => notFlipped', animate('400ms ease-out'))
    ])
  ]
})

export class HomePage {
  private _navCtrl : NavController;
   flipState: any;

  constructor(public navCtrl: NavController,public audioService : AudioService) {
    this._navCtrl = navCtrl;
  }

  navigateToGallery(){
   this.navCtrl.push(GalleryPage);
  }

   navigateToAbout(){
   this.navCtrl.push(AboutPage);
  }

  toggleFlip() {
    this.audioService.playTrumpSound();
    this.flipState = (this.flipState == 'notFlipped' || !this.flipState)  ? 'flipped' : 'notFlipped';
  }

   ngOnInit() {
     this.audioService.preloadTrumpAudio();
  }
}