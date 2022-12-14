import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { CategoryModel } from '../models/CategoryModel';
import { ICart } from '../models/ICart';
import { ProductService } from './products.service';
@Injectable({
  providedIn: 'root'
})
export class StateService {
  public products: any[] = [];
  public categories: CategoryModel[] = [];
  public categoryId: any;
  public isLoggedIn: boolean = false
  public carts: any = [];
  public items: any = [];
  public totalCartPrice: any = 0;
  public cartId: number = 0;
  public searchText: string = ''
  public userLogin: string = ""
  public showCart: boolean = false;
  public isServerError: boolean = false
  public serverError: string = '';
  public currentOrder: any;
  public checkoutSearchValue: FormControl = new FormControl('');
  public isAdmin: boolean = false
  public isManageProductClicked: boolean = false
  public productToEdit: any = {};
  public cartItemAmount: { amount: number } = { amount: 0 }
  public username: string = ''
  public total: number = 0


  public cities: string[] = [
    'Tel Aviv - Yafo',
    'Jerusalem',
    'Haifa',
    "Be'er Sheva",
    'Netanya',
    'Rishon LeZion',
    'Holon',
    'Eilat',
    'Herzelia',
    'Petah Tikva',
  ];

  constructor(private router: Router, public productServices: ProductService, public toast: HotToastService) { }



  public getAllProduct() {
    const observable = this.productServices.getAllProducts();
    observable.subscribe(products => {
      this.products = products
      this.categories = [];
      let categoryId: any[] = [];

      for (let i = 0; i < this.products.length; i++) {

        if (!categoryId.includes(this.products[i].categoryId)) {
          categoryId.push(this.products[i].categoryId)
          this.categories.push({
            categoryId: this.products[i].categoryId,
            categoryName: this.products[i].categoryName
          })
        }

      }
      (serverErrorResponse: { message: string; }) => {
        console.log("Error! " + serverErrorResponse.message)
        this.toast.error(`Failed to get info!`)
      }
    })
  }

  public totalProductInCart() {
    this.total = 0
    if (this.carts) {
      for (let i = 0; i < this.carts.length; i++) {
        this.total = this.total + this.carts[i].amount
      }
    } else {
      this.total = 0
    }
  }

  getTotal() {
    this.totalCartPrice = 0
    for (let i = 0; i < this.carts.length; i++) {
      this.totalCartPrice += (this.carts[i].amount * this.carts[i].price);
    }
    return this.totalCartPrice;
  }

  showToast() {
    this.toast.show('Hello World!');
    this.toast.success('Yeah!!');
    this.toast.warning('Boo!');
    this.toast.error('Oh no!');
    this.toast.info('Something...');
  }

}
