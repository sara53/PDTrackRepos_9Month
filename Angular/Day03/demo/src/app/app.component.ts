import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/login/content/content.component';
import { ProductsComponent } from './components/products/products.component';
import { CommonModule } from '@angular/common';
import { ChangepipvaluePipe } from './customs/changepipvalue.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoginComponent,
    ContentComponent,
    ProductsComponent,
    CommonModule,
    ChangepipvaluePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  appData: string = 'Pd Track';
  dataFromContent: string = '';
  flag: boolean = false;
  show() {
    console.log('Clicked');
  }

  getData(x: any) {
    this.dataFromContent = x;
  }
  ChangeData() {
    this.flag = !this.flag;
  }
}
