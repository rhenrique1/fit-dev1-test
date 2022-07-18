import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/dialogs/confirm-dialog/confirm-dialog.component';
import { SimpleDialogComponent } from 'src/app/shared/dialogs/simple-dialog/simple-dialog.component';
import { Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  @Input() public product!: Product;
  @Output() public updateProducts = new EventEmitter();

  private maxAvailable: number = 0;

  constructor(public dialog: MatDialog, public cartService: CartService) { }

  ngOnInit(): void {

    this.maxAvailable = this.product.available + this.product.added;
  }

  onRemoveProduct() {
    if (this.product.added == 1) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '250px',
        data: {
          title: 'Remover produto?',
          description: 'Confirmar remoção do produto.',
          cancelButtonText: 'Não',
          confirmButtonText: 'Sim'
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.cartService.removeProductFromCart(this.product);
          this.updateProducts.emit(true);
        }
      });

      return;
    }

    if (this.product.available == this.maxAvailable) {
      return;
    }

    this.cartService.subtractProductQuantity(this.product);

  }

  onAddProduct() {
    if (this.product.available == 0) {
      let dialogRef = this.dialog.open(SimpleDialogComponent, {
        width: '250px',
        data: {
          title: 'Aviso',
          description: 'Item sem estoque!'
        }
      });

      return;
    }

    this.cartService.addProductToCart(this.product);
  }
}