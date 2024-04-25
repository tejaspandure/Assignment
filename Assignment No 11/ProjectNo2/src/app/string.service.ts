import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  CountCapital(inputString: string): number 
  {
    let capitalCount: number = 0;

    for (let i = 0; i < inputString.length; i++) 
    {
        if (inputString[i] >= 'A' && inputString[i] <= 'Z') 
        {
            capitalCount++;
        }
    }

    return capitalCount;
  }
}

