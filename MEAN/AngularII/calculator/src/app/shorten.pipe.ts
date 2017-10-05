import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

    transform(value: any) {
        if (value.length > 18) {
            return '...' + value.substr(value.length - 18, value.length);
        }
      return value;
    }
}
