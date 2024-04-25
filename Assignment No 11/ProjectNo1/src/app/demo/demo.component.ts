import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticService } from '../arithmetic.service';


@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css', 
  providers : [ArithmeticService],

})
export class DemoComponent {
  public additionResult: number = 0;
  public substractionResult: number =0;


  constructor(public obj: ArithmeticService)
  {
    this.additionResult=obj.Addition(10, 5);
    this.substractionResult=obj.Substraction(10, 5);
  }
  


}


