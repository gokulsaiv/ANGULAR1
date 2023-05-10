import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'combine'
})
export class CombinePipe implements PipeTransform {

  transform(value: string, args: string): string {
    return `${value} ${args}`
  }

}
