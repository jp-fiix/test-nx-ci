import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  WEB_STORAGE_TYPE,
  WebStorageService,
} from '../core/web-storage.service';
import { localStorageFactory } from 'ngx-webstorage-service';

@Injectable()
export class LocalStorageAuthInterceptor implements HttpInterceptor {
  private _webStorageService: WebStorageService;

  constructor() {
    const injector = Injector.create({
      providers: [
        { provide: WebStorageService, useClass: WebStorageService },
        { provide: WEB_STORAGE_TYPE, useFactory: () => localStorageFactory() },
      ],
    });
    this._webStorageService = injector.get(WebStorageService);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this._webStorageService.has('tenantId')) {
      req = req.clone({
        headers: req.headers.set('Fiix-Tenant-Id', this._webStorageService.get('tenantId')),
      });
    }
    if (this._webStorageService.has('userId')) {
      req = req.clone({
        headers: req.headers.set('Fiix-User-Id', this._webStorageService.get('userId')),
      });
    }
    if (this._webStorageService.has('jwt')) {
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${this._webStorageService.get('jwt')}`),
      });
    }
    return next.handle(req);
  }
}
