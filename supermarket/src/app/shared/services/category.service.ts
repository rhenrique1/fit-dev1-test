import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Category[] {
    return [
      { id: 1, name: "Alimentos", products: [] },
      { id: 2, name: "Bebidas", products: [] },
      { id: 3, name: "Carnes", products: [] },
    ];
  }
}
