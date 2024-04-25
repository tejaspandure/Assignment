import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  CountCapital(str: string): number {
    return str.split('').filter(char => char >= 'A' && char <= 'Z').length;
  }

  CheckPassword(password: string): boolean {
    const capitalRegex = /[A-Z]/g;
    const smallRegex = /[a-z]/g;
    const digitRegex = /[0-9]/g;
    const specialRegex = /[$&+,:;=?@#|'<>.^*()%!-]/g;

    return (
      (password.match(capitalRegex) || []).length >= 2 &&
      (password.match(smallRegex) || []).length >= 3 &&
      (password.match(digitRegex) || []).length >= 2 &&
      (password.match(specialRegex) || []).length >= 1
    );
  }

  ArrayAddition(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
}
