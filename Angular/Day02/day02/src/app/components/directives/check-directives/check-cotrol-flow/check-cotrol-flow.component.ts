import { Component } from '@angular/core';

@Component({
  selector: 'app-check-cotrol-flow',
  standalone: true,
  imports: [],
  templateUrl: './check-cotrol-flow.component.html',
  styleUrl: './check-cotrol-flow.component.css',
})
export class CheckCotrolFlowComponent {
  itiTracks: string[] = [];
  color: string = 'blue';
  test: string = '';
  second: string = '<div class="bg-success"> welcome</div>';

  flag: boolean = true;
  products: { id: number; name: string }[] = [
    {
      id: 1,
      name: 'Book',
    },
    {
      id: 2,
      name: 'pen',
    },
  ];
}
