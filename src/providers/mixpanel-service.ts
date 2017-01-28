import * as Mixpanel from "mixpanel";
import { Injectable } from '@angular/core';

@Injectable()
export class MixpanelService {
    _mixPanel : any;

    public init(token) {
        this._mixPanel = Mixpanel.init(token, {});
    }

    track(event:string) {
        this._mixPanel.track(event);
    }
}