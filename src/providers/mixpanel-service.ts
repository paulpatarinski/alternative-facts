import * as Mixpanel from "mixpanel";
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class MixpanelService {
    _mixPanel : any;

    constructor(public plt: Platform) {
        
    }

    public init(token) {
        this._mixPanel = Mixpanel.init(token, {protocol : 'https'});
    }

    track(event:string) {
        this._mixPanel.track(event, {
            platform : this.plt.platforms(),
            platformVersion : this.plt.versions()
        });
    }
}