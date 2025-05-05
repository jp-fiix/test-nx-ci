import { Inject, Injectable, InjectionToken } from '@angular/core';
import { localStorageFactory, StorageService } from 'ngx-webstorage-service';

export const WEB_STORAGE_TYPE = new InjectionToken<StorageService>('Web Storage Type', {
  factory: localStorageFactory,
});

@Injectable()
export class WebStorageService {
  constructor(@Inject(WEB_STORAGE_TYPE) private _storage: StorageService) {}

  private _keyPrefix: string = 'cmms-';

  public get<T>(key: string): T {
    return this._storage.get(this._keyPrefix + key);
  }

  public set<T>(key: string, value: T): void {
    return this._storage.set(this._keyPrefix + key, value);
  }

  public has(key: string): boolean {
    return this._storage.has(this._keyPrefix + key);
  }

  public clear(): void {
    this._storage.clear();
  }
}
