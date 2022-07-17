import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() public category!: Category;

  public isLoading: boolean = true;
  public products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initProducts();
  }

  initProducts() {
    this.products = this.selectProducts();
    this.isLoading = false;
  }

  selectProducts() {
    this.isLoading = true;

    let products: Product[] = [
      { name: "Feijão 1kg", id: 1, description: "Feijão", price: 8.50, categoryId: 1 },
      { name: "Arroz 1kg", id: 2, description: "Arroz", price: 8.50, categoryId: 1 },
      { name: "Batata 1kg", id: 3, description: "Batata", price: 8.50, categoryId: 1 },
      { name: "Frango 1kg", id: 4, description: "Frango", price: 8.50, categoryId: 1 },
      { name: "Vodka 1L", id: 5, description: "Vodka", price: 8.50, categoryId: 2 },
      { name: "Vinho 750ml", id: 6, description: "Vinho", price: 8.50, categoryId: 2 },
      { name: "Cerveja 270ml", id: 7, description: "Cerveja", price: 8.50, categoryId: 2 },
    ];

    return products.filter(x => x.categoryId == this.category.id);
  }

  addProduct(productId: number) {
    console.log(productId);
  }
}