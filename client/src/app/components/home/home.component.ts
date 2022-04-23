import { Component, NgModule, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { IProducts } from 'src/app/models/IProducts';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';
import { CartService } from 'src/app/services/cart.service';
import { ICart } from 'src/app/models/ICart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(
    public stateService: StateService,
    public productServices: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    public cartService: CartService,
  ) { }

  ngOnInit(): void {

    const observable1 = this.cartService.getCart();
    observable1.subscribe(cart => {
      if (cart[0].items == undefined) {
        this.stateService.carts = []
      }
      else {
        this.stateService.carts = cart[0].items
      }
      this.stateService.carts = cart[0].items
      this.stateService.cartId = cart[0].cartId
      this.stateService.totalProductInCart()

    }, error => {
      console.log('Failed to get info' + JSON.stringify(error));
      this.stateService.toast.error(`Failed to get info!`)
    })
    
    this.stateService.getAllProduct()
  }

}
