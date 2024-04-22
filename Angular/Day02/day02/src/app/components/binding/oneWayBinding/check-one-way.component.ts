import { Component } from '@angular/core';

@Component({
  selector: 'app-check-one-way',
  standalone: true,
  imports: [],
  templateUrl: './check-one-way.component.html',
  styleUrl: './check-one-way.component.css',
})
export class CheckOneWayComponent {
  componentTitle: string = 'OS Track';
  flag: boolean = true;

  imgSrc1: string = '4.jpg';
  imgSrc2: string = 'assets/imgs/2.jpg';

  clickHandler() {
    console.log('btn Clicked');
  }
}
