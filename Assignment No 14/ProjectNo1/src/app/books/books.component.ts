import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{

  Books:string[]=['Clean Code','Design Patterns', 'Spartan'];
  constructor(){

  }
  ngOnInit(): void {
      
  }
}
