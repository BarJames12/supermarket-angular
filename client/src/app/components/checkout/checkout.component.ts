import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { StateService } from 'src/app/services/state.service';
import { UsersService } from 'src/app/services/user.service';
import { NgbActiveModal, NgbModal, NgbCalendar, NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  // template: `
  //   <div class="modal-header">
  //     <h4 class="modal-title">Hi there!</h4>
  //     <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
  //       <span aria-hidden="true">&times;</span>
  //     </button>
  //   </div>
  //   <div class="modal-body">
  //     <p>Hello, {{name}}!</p>
  //   </div>
  //   <div class="modal-footer">
  //     <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
  //   </div>
  // `

})



export class CheckoutComponent implements OnInit {
  // public value: any = ""
  public userData: any = {}
  public firstName: string = ""
  public lastName: string = ""
  public city: string = ""
  public address: string = ""
  public shippingDate: any
  public creditNum: string = ""
  public today: any = ""
  public fixedDate: any = ""
  public unavailableDate: any = {}
  public userType: string = " "
  public match: any
  public model: NgbDateStruct | undefined;
  public disabledDate: any
  public minDate: any
  public markDisabled: any

  constructor(public stateService: StateService, public cartService: CartService, public userService: UsersService, public datepipe: DatePipe, private router: Router, private calendar: NgbCalendar) {


  }

  ngOnInit(): void {
    this.stateService.serverError = " "

    let token: any = localStorage.getItem("token");
    let parsedToken = (JSON.parse(token))
    this.userType = parsedToken.userType
    if (this.userType == "ADMIN") {
      this.router.navigate(['/landingPage'])
    }


    const observable = this.cartService.getUnavailableOrderDates();
    observable.subscribe(unavailable => {
      this.unavailableDate = unavailable
      console.log(this.unavailableDate);
      // this.getDayMonthYear()
    }, error => {
      console.log('Failed to get info ' + JSON.stringify(error));
    })

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
    }, error => {
      console.log('Failed to get info ' + JSON.stringify(error));
    })

    const observable2 = this.userService.getPersonalInfo();
    observable2.subscribe(info => {
      this.userData = info[0]
    }, error => {
      console.log('Failed to get info ' + JSON.stringify(error));
    })

    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
  }

  public getDate() {

    //** OPT 1 
    this.today = new Date();
    let dd: any = this.today.getDate();
    let mm: any = this.today.getMonth() + 1;
    let yyyy: any = this.today.getFullYear();
    let hour: any = this.today.getHours();
    let min: any = this.today.getMinutes();

    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    this.today = yyyy + "-" + mm + "-" + dd;
    let now = hour + ":" + min;

    this.fixedDate = this.today + " " + now;
    return this.fixedDate;

    // // *** OPT 2
    // this.date = new Date();
    // let latest_date = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    // return latest_date
  }



  public onFirstNameDbClick() {
    this.firstName = this.userData.firstName
  }

  public onLastNameDbClick() {
    this.lastName = this.userData.lastName
  }

  public onCityDbClick() {
    this.city = this.userData.city
  }

  public onaddressDbClick() {
    this.address = this.userData.address
  }

  public onCheckoutClick() {
    console.log(this.stateService.totalCartPrice);
    // this.shippingDate = (`${this.shippingDate.year}` + "-" + `${this.shippingDate.month}` + "-" + `${this.shippingDate.day}`);


    let checkoutDeatils = { firstName: this.firstName, lastName: this.lastName, totalPrice: this.stateService.totalCartPrice, city: this.city, address: this.address, shippingDate: this.shippingDate, orderDate: this.getDate(), creditNum: this.creditNum, };
    // checkoutDeatils.shippingDate = (`${this.shippingDate.year}` + "-" + `${this.shippingDate.month}` + "-" + `${this.shippingDate.day}`);
    const observable = this.cartService.checkout(checkoutDeatils)

    observable.subscribe((successfulServerRequestData) => {
      console.log(successfulServerRequestData);

      this.stateService.currentOrder = successfulServerRequestData
      console.log(this.stateService.currentOrder);

      this.stateService.toast.success(`Checkout complete !`, {
        style: {
          color: '#6fae1d',
          backgroundColor: '#white',
          fontWeight: "600"
        },
        iconTheme: {
          primary: '#6fae1d',
          secondary: '#FFFAEE',
        },
      });

      this.stateService.carts = []
      this.router.navigate(['/after-checkout'])
    }, ServerErrorResponse => {
      this.stateService.isServerError = this.stateService.isServerError ? true : true;
      this.stateService.serverError = JSON.parse(JSON.stringify(ServerErrorResponse.error.error))

      this.stateService.toast.error(`Payment error!`)
    })

  }
}
