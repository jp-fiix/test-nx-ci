import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ standalone: false, name: 'hasPermission' })
export class HasPermissionPipe implements PipeTransform {
  public transform(permissions: string[]): boolean {
    return true;
  }
}
