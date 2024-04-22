import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  imgsList: string[] = [
    'assets/imgs/2.jpg',
    'assets/imgs/3.jpg',
    'assets/imgs/4.jpg',
  ];

  imgSrc: string = 'assets/imgs/1.jpg';

  i: number = 0;

  show() {
    this.i++;
    if (this.i == this.imgsList.length) {
      this.i = 0;
    }
    this.imgSrc = this.imgsList[this.i];
  }
}
