import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { FiixMessageBarService } from '@fiix/angular-components';
import { TranslocoService } from '@ngneat/transloco';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EquipmentAuthorizationService } from '@cmms2.0/equipment/app/api/generated/services/equipment-authorization.service';
import { EquipmentPermissionsService } from '@cmms2.0/equipment/app/shared/equipment/services/equipment-permissions.service';
import HttpStatusCode from '@core/models/http/http-status-code';
import { HttpRequestMethod } from '@core/models/http/http-request-method';
import { SharedAuthorizationService } from '@cmms2.0/equipment/app/api-shared/generated/services';
import { Router } from '@angular/router';
import { AppRoutingConsts } from '@cmms2.0/equipment/app/app-routing-consts';

@Injectable()
export class HttpErrorCodeInterceptor implements HttpInterceptor {
  constructor(
    private _messageBarService: FiixMessageBarService,
    private _equipmentPermissionsService: EquipmentPermissionsService,
    private _translationService: TranslocoService,
    private _equipmentAuthService: EquipmentAuthorizationService,
    private _sharedAuthService: SharedAuthorizationService,
    private _router: Router
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        switch (error.status) {
          case HttpStatusCode.FORBIDDEN:
            this._reloadPermissions(req);
            break;
          case HttpStatusCode.INTERNAL_SERVER_ERROR:
            if (req.method !== HttpRequestMethod.GET) {
              this._messageBarService.error(this._translationService.translate('general.errors.server-error'));
            }
            break;
        }
        return throwError(() => error);
      })
    );
  }

  // Fetch permissions again in case they have been updated since the app was initialized
  // If the last request was a permissions fetch, don't fetch them again
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _reloadPermissions(req: HttpRequest<any>): void {
    if (this._isPermissionsRequest(req)) {
      return;
    }

    if (this._isEquipmentComponentsRequest()) {
      this._sharedAuthService.auth().subscribe((response) => {
        this._equipmentPermissionsService.loadEquipmentComponentsPermissions(response.permissions);
      });
    } else {
      this._equipmentAuthService.auth().subscribe((response) => {
        this._equipmentPermissionsService.loadEquipmentWebappPermissions(response.permissions);
      });
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _isPermissionsRequest(req: HttpRequest<any>): boolean {
    return (
      req.url.substring(req.url.lastIndexOf('/')) === EquipmentAuthorizationService.AuthPath ||
      req.url.substring(req.url.lastIndexOf('/')) === SharedAuthorizationService.AuthPath
    );
  }

  private _isEquipmentComponentsRequest(): boolean {
    return this._router.url.split('/')[2] === AppRoutingConsts.EQUIPMENT_COMPONENTS_ROUTE_SEGMENT;
  }
}
