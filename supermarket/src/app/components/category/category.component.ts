import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() public category!: Category;

  public isLoading: boolean = true;
  public products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.initProducts();
  }

  initProducts() {
    this.products = this.selectProducts();
    this.isLoading = false;
  }

  selectProducts() {
    this.isLoading = true;
    return this.productService.getProductsByCategoryId(this.category.id);
  }
}