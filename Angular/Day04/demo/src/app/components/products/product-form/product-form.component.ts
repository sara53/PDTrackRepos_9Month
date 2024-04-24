import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../../models/iproduct';
import { productsList } from '../../../models/productsList';
import { ProductService } from '../../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
  name: string = '';
  price: number = 0;
  quantity: number = 0;

  productId: any;
  product: any;
  constructor(
    public productServices: ProductService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.productId != 0) {
      this.product = this.productServices.getProductById(this.productId);
      this.name = this.product.name;
      this.price = this.product.price;
      this.quantity = this.product.quantity;
    }
  }

  productHandler() {
    if (this.productId == 0) {
      let id = productsList.length + 1;
      let newProduct: Iproduct = {
        id,
        name: this.name,
        price: this.price,
        quantity: this.quantity,
      };
      this.productServices.addNewProduct(newProduct);
      this.router.navigate(['/products']);
    } else {
      // edit
      this.router.navigate(['/products']);
    }
  }
}
