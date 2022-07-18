import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, public cartService: CartService) { }

  ngOnInit(): void {
  }

  onGoToCart() {
    this.router.navigateByUrl('my-cart/');
  }

  navigateHome() {
    this.router.navigateByUrl('');
  }
}
