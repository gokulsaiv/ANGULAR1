import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    if(!value){
      return 'Actice';
    }
    else{
      return 'InActive'
    }
  }

}
