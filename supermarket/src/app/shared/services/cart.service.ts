import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SimpleDialogComponent } from '../dialogs/simple-dialog/simple-dialog.component';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public products: Product[] = [];
  public totalValue: number = 0;

  constructor(public dialog: MatDialog) { }

  addProductToCart(product: Product) {
    if (product.available == 0) {
      let dialogRef = this.dialog.open(SimpleDialogComponent, {
        width: '250px',
        data: {
          title: 'Aviso',
          description: 'Item sem estoque!'
        }
      });

      return;
    }

    let productToAdd = this.products.find(x => x.id == product.id);

    if (productToAdd == undefined) {
      product.added++;
      product.available--;

      this.products.push(product);

      this.calculateTotalValue();

      return;
    }

    productToAdd.added++;
    productToAdd.available--;

    this.calculateTotalValue();
  }

  removeProductFromCart(product: Product) {
    this.products = this.products.filter(x => x.id != product.id);
    this.calculateTotalValue();
  }

  subtractProductQuantity(product: Product) {
    let productToSubtract = this.products.find(x => x.id == product.id);

    if (productToSubtract !== undefined) {
      productToSubtract.added--;
      productToSubtract.available++;
    }

    this.calculateTotalValue();
  }

  calculateTotalValue() {
    this.totalValue = 0;

    this.products.forEach(element => {
      this.totalValue += element.price * element.added;
    });
  }
}
