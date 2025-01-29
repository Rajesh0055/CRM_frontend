import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Router } from '@angular/router';
import { hrroutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(hrroutes)]
}).catch(err => console.error(err));

  
