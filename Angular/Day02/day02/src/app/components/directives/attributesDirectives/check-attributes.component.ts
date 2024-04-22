import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-check-attributes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-attributes.component.html',
  styleUrl: './check-attributes.component.css',
})
export class CheckAttributesComponent {
  flag: boolean = false;

  toggle() {
    this.flag = !this.flag;
  }
}
