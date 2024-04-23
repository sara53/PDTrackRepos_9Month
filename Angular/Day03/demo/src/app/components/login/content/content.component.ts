import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  contentData: string = 'Welcome From ITI';

  @Output() contentEvent = new EventEmitter();

  sendData() {
    this.contentEvent.emit(this.contentData);
  }
}
