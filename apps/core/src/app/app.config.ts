import { ApplicationConfig, importProvidersFrom, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { WebStorageService } from '@core/web-storage.service';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgEventBus } from 'ng-event-bus';
import { TranslocoRootModule } from '@core/transloco-root-module';
import { HttpHeadersInterceptor } from '@core/interceptors/http-headers-interceptor.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter(appRoutes),
    importProvidersFrom(NgxPermissionsModule.forRoot()),
    provideHttpClient(withInterceptorsFromDi()),
    NgEventBus,
    importProvidersFrom(TranslocoRootModule),
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeadersInterceptor, multi: true },
    WebStorageService
  ],
};
