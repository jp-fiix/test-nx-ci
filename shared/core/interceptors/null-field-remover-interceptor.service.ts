import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import cleanDeep from 'clean-deep';
import { HttpRequestMethod } from '../core/models/http/http-request-method';
import { HttpHeader } from '../core/models/http/http-header';
import { HttpContentType } from '../core/models/http/http-content-type';

@Injectable({
  providedIn: 'root',
})
export class NullFieldRemoverInterceptor implements HttpInterceptor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (
      req.headers.get(HttpHeader.ContentType) !== HttpContentType.ApplicationJson ||
      (req.method !== HttpRequestMethod.PUT && req.method !== HttpRequestMethod.POST)
    ) {
      return next.handle(req);
    }

    const cleanReq = req.clone({
      body: cleanDeep(req.body, {
        emptyStrings: false,
      }),
    });
    return next.handle(cleanReq);
  }
}
