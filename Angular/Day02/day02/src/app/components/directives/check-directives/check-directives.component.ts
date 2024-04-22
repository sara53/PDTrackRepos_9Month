import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-check-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-directives.component.html',
  styleUrl: './check-directives.component.css',
})
export class CheckDirectivesComponent {
  flag: boolean = false;
  color: string = 'orange';
  names: string[] = ['ahmed', 'alaa', 'mona', 'hoda'];
  toggle() {
    this.flag = !this.flag;
    console.log(this.flag);
  }
}
