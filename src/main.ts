import {enableProdMode} from '@angular/core';

import {AppModule} from '@src/app/app.module';
import {environment} from '@src/environments/environment';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

if (environment.production) {
    enableProdMode();
}

console.log("Start with WEB profile");
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
