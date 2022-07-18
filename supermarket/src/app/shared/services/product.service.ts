import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    { name: "Feijão 1kg", id: 1, description: "Feijão", price: 8.50, available: 1, added: 0, categoryId: 1 },
    { name: "Arroz 1kg", id: 2, description: "Arroz", price: 8.50, available: 2, added: 0, categoryId: 1 },
    { name: "Batata 1kg", id: 3, description: "Batata", price: 8.50, available: 3, added: 0, categoryId: 1 },
    { name: "Pão", id: 4, description: "Pão", price: 8.50, available: 4, added: 0, categoryId: 1 },
    { name: "Vodka 1L", id: 5, description: "Vodka", price: 8.50, available: 5, added: 0, categoryId: 2 },
    { name: "Cerveja 270ml", id: 6, description: "Vodka", price: 8.50, available: 0, added: 0, categoryId: 2 },
    { name: "Vinho 750ml", id: 7, description: "Vinho", price: 8.50, available: 6, added: 0, categoryId: 2 },
    { name: "Picanha", id: 8, description: "Picanha", price: 8.50, available: 7, added: 0, categoryId: 3 },
    { name: "Frango", id: 9, description: "Frango", price: 8.50, available: 7, added: 0, categoryId: 3 },
    { name: "Peixe", id: 10, description: "Peixe", price: 8.50, available: 7, added: 0, categoryId: 3 },
  ];

  constructor() { }

  getProductsByCategoryId(categoryId: number): Product[] {
    return this.products.filter(x => x.categoryId == categoryId);
  }
}
