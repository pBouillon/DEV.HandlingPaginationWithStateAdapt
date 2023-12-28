import { bootstrapApplication } from '@angular/platform-browser';

import { defaultStoreProvider } from '@state-adapt/angular';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [defaultStoreProvider],
}).catch((err) => console.error(err));
