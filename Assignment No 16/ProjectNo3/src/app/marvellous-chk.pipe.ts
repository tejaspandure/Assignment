import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, type: string): string {
    switch (type.toLowerCase()) {
      case 'prime':
        return this.isPrime(value) ? 'Prime' : 'Not Prime';
      case 'perfect':
        return this.isPerfect(value) ? 'Perfect' : 'Not Perfect';
      case 'even':
        return value % 2 === 0 ? 'Even' : 'Odd';
      case 'odd':
        return value % 2 !== 0 ? 'Odd' : 'Even';
      default:
        return 'Invalid Type';
    }
  }

  private isPrime(number: number): boolean {
    for(let i = 2, s = Math.sqrt(number); i <= s; i++)
        if(number % i === 0) return false; 
    return number > 1;
  }

  private isPerfect(number: number): boolean {
    let sum = 1;
    for(let i = 2; i * i <= number; i++) {
        if(number % i === 0) {
            sum = sum + i + number / i;
        }
    }
    if(sum === number && number !== 1) return true;
    return false;
  }

}