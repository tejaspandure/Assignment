import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string
  {
    let temp:string ="";
    
    for(let i= value.length-1; i>=0; i--)
    {
      temp+=value.charAt(i);
    }
    return temp;
  }

}
