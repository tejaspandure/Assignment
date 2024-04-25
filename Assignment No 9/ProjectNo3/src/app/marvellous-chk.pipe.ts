import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param: string): string {
    if (param === 'Prime') {
      if (value <= 1) {
        return 'It is not Prime number';
      } else {
        for (let i = 2; i < value; i++) {
          if (value % i === 0) {
            return 'It is not Prime number';
          }
        }
        return 'It is Prime number';
      }
    }

    if (param === 'Perfect') {
      let sum = 0;
      for (let i = 1; i < value; i++) {
        if (value % i === 0) {
          sum += i;
        }
      }
      if (sum === value) {
        return 'It is Perfect number';
      } else {
        return 'It is not Perfect number';
      }
    }

    if (param === 'Even') {
      return value % 2 === 0 ? 'It is Even' : 'It is not Even';
    }

    if (param === 'Odd') {
      return value % 2 !== 0 ? 'It is Odd' : 'It is not Odd';
    }

    return 'Invalid parameter';
  }
}

