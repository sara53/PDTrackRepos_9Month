import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Iproduct } from '../../models/iproduct';
import { productsList } from '../../models/productsList';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Iproduct[] = [];

  constructor() {
    this.products = productsList;
  }
}
