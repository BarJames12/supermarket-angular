import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  node: any;
  public userType: string = " "
  public amount: number = 0


  constructor(public stateService: StateService, private router: Router) { }

  visible: boolean = false;
  onCartClick() {
    this.visible = this.visible ? false : true;
  }


  ngOnInit(): void {
    let token: any = localStorage.getItem("token");
    let parsedToken = (JSON.parse(token))
    if (parsedToken) {
      this.stateService.username = parsedToken.username
    }
  }

  public onLogoutClick() {
    localStorage.removeItem('token');
    this.router.navigate(['/landingPage']).then(() => {
    });
  }

  public getTotalProduct() {
    if (this.stateService.carts.length > 0) {

      this.stateService.cartItemAmount = this.stateService.carts.reduce(function (previousValue: any, currentValue: any) {
        return {
          amount: previousValue.amount + currentValue.amount,
        }
      });

      return this.stateService.cartItemAmount.amount;
    } else {
      return this.stateService.cartItemAmount.amount = 0
    }
  }

}


