import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    // provideAnimations(),
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }, // Corrected Syntax
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ]
};
