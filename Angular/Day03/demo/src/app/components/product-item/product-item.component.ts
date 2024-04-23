import { Component, Input } from '@angular/core';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() myProduct: any = {};
}
