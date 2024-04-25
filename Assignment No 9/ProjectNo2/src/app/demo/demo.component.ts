import { Component } from '@angular/core';

import { MyAddPipe } from '../my-add.pipe';
import { MyMultiPipe } from '../my-multi.pipe';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [MyAddPipe,MyMultiPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

}
