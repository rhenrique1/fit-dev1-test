import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() public product!: Product;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  onAddProductToCart() {
    this.cartService.addProductToCart(this.product);
  }
}
