import { Injectable } from '@angular/core';
import { NativeAudio } from 'ionic-native';

@Injectable()
export class AudioService {
    preloadTrumpAudio() {
        return NativeAudio.preloadSimple('uniqueId1', 'assets/cow_moo.wav')
            .catch(console.log);
    }

    playAudio() {
        return NativeAudio.play('uniqueId1', () => console.log('Done Playing Cow Sound'));
    }

    playTrumpSound() {
        return this.playAudio()
            .catch(console.log);
    }
}