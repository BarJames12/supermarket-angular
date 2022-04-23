import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/products.service';
import { StateService } from 'src/app/services/state.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public isCartEmpty: boolean = false

  constructor(public cartService: CartService, public stateService: StateService,
    public productServices: ProductService,
    private router: Router,
    private route: ActivatedRoute, public headerComponent:HeaderComponent ,) { }

  ngOnInit(): void {
    
    if (this.stateService.carts.length > 0) {
      this.isCartEmpty == false
    }
    if (this.stateService.carts.length == 0) {
      this.isCartEmpty == true
    }

  }
  
  public onAmountChange(product: any, newAmount: any) {
    product.amount = +newAmount.target.value;
    let productToUpdate = { productId: product.productId, amount: product.amount, cartId: this.stateService.cartId, totalPrice: (product.price * product.amount) }
    this.cartService.updateCart(productToUpdate)
    this.stateService.totalProductInCart()
  }

  public onDeleteClick(productId: number) {
    this.cartService.deleteFromCart(productId, this.stateService.cartId);
    const filtered = this.stateService.carts.filter((product: any) => product.productId !== productId);
    this.stateService.carts = [...filtered]
    this.stateService.totalProductInCart()
  }

  public onMoveToCheckout() {

    this.router.navigate(["/checkout"]);
  }

  public ifCartEmpty() {
    if (this.stateService.carts.length > 0) {
      this.isCartEmpty == false
    }
    if (this.stateService.carts.length == 0) {
      this.isCartEmpty == true
    }
  }

  
}
