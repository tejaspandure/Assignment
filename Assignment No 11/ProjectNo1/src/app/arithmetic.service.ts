import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }
  
  
  Addition(a: number, b: number): number 
  {
    return a+b;

  }
  Substraction(a: number, b: number): number{
    return a-b;
  }


}
