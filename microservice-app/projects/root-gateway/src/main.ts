import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { CommonComponent } from './app/common/common.component';
import { commanRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
    providers: [provideRouter(commanRoutes)]
  }).catch(err => console.error(err));
  