import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/**
 * @description boots the module AppModule using the platformBrowserDynamic method
 * of the BrowserModule and logs any errors to the console using the catch method.
 * 
 * @param { object } err - *. catch(err => console.log(err)); part of the function
 * handles errors.
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
