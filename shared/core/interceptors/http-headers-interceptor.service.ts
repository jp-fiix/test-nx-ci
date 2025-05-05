import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WebStorageService } from '@core/web-storage.service';

export const SITE_ID_HEADER_KEY = 'Site-Id';
export const SITE_ID_URL_PARAM = 'v6SelectedSiteId';
export const SITE_ID_LOCAL_STORAGE_KEY = 'selectedSiteId';
export const TIME_ZONE_HEADER_KEY = 'Time-Zone';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor(private _webStorageService: WebStorageService) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this._isFiixEndpoint(req.url)) {
      req = req.clone({
        headers: req.headers.set(TIME_ZONE_HEADER_KEY, Intl.DateTimeFormat().resolvedOptions().timeZone),
      });

      if (this._webStorageService.has('jwt')) {
        req = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${this._webStorageService.get('jwt')}`),
        });
      }
    }

    return next.handle(req);
  }

  private _isFiixEndpoint(url: string): boolean {
    return url.includes('fiixcmms');
  }
}
