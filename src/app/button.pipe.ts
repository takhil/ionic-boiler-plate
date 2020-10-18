import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'button'
})
export class ButtonPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
