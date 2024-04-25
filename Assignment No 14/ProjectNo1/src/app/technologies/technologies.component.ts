import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent implements OnInit{
  technologies:string[]=['Angular','Node js', 'Android','Big data'];
  constructor(){

  }
  ngOnInit(): void {
      
  }
  

}
