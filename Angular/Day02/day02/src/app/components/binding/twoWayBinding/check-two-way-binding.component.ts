import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './check-two-way-binding.component.html',
  styleUrl: './check-two-way-binding.component.css',
})
export class CheckTwoWayBindingComponent {
  inputValue: string = '';

  testValue: string = '';

  selectValue: string = '';

  getData(e: Event) {
    let target = e.target as HTMLInputElement;
    this.inputValue = target.value;
  }

  showText(x: any) {
    console.log(x.textContent);
  }
}
