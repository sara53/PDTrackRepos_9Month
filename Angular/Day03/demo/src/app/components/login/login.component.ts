import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  input,
} from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit, OnChanges {
  @Input() myFlag: boolean = false;
  componentTitle: string = 'login Component';
  constructor() {
    // this.loginData = 'new Value';
    console.log('1-Ctor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('OnInit');
  }
  @Input() loginData: string = '';
  @Input() contentData: string = '';
}
