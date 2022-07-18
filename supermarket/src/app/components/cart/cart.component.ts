import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PurchaseDialogComponent } from 'src/app/shared/dialogs/purchase-dialog/purchase-dialog.component';
import { Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: Product[] = [];

  constructor(private router: Router, public cartService: CartService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.products = this.cartService.products;
  }

  onReturnHome() {
    this.router.navigateByUrl('');
  }

  onConfirmPurchase() {
    let dialogRef = this.dialog.open(PurchaseDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
