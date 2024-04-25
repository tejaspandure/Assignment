import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMulti',
  standalone: true
})
export class MyMultiPipe implements PipeTransform {

  transform(value:number, param: number):number
  {
    return value*param;
  }

}
