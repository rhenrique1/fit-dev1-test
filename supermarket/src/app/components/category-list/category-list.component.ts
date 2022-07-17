import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public isLoading: boolean = true;
  public categoryFilter: string = '';

  public categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.initCategories();
  }

  initCategories() {
    this.categories = this.selectCategories();
    this.isLoading = false;
  }

  selectCategories() {
    let categories = this.categoryService.getCategories();

    if (this.categoryFilter == '') {
      return categories;
    }

    return categories.filter(x => x.name.toLowerCase().includes(this.categoryFilter.toLowerCase()));
  }
}
