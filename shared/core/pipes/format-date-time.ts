import { Pipe, PipeTransform } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Pipe({ standalone: false, name: 'formatDateTime' })
export class FormatDateTimePipe implements PipeTransform {
  public transform(value: string, customFormat?: string): string {
    if (!value) {
      return '';
    }
    if (customFormat) {
      return format(parseISO(value), customFormat);
    }
    const locales = navigator.languages.slice();
    const is24HourClock = new Intl.DateTimeFormat(locales, { hour: 'numeric' }).format(0).match(/h/);
    const formatPattern = is24HourClock ? 'MMM dd, yyyy HH:mm:ss' : 'MMM dd, yyyy hh:mm:ss a';
    return format(parseISO(value), formatPattern);
  }
}
