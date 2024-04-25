import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringService } from '../string.service';
import { checkPrime } from 'crypto';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers: [StringService],
})
export class Child2Component 
{
  public STring :any=[];
  public inputString="HelloWorld";
  constructor ( private obj: StringService)
  {
    this.STring=this.obj.CountCapital(this.inputString)
  }
    
  

      
}