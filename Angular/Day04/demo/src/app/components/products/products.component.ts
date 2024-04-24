import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Iproduct[];
  constructor(public productService: ProductService) {
    this.products = [];
  }
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  deleteHandler(productId: number) {
    this.products = this.productService.deleteProduct(productId);
  }
}
