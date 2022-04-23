import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { StateService } from 'src/app/services/state.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-after-checkout',
  templateUrl: './after-checkout.component.html',
  styleUrls: ['./after-checkout.component.css']
})
export class AfterCheckoutComponent implements OnInit {

  constructor(public stateService: StateService, private router: Router, public cartService:CartService) { }
  public userType: string = " "

  ngOnInit(): void {
    console.log(this.stateService.currentOrder);

    let token: any = localStorage.getItem("token");
    let parsedToken = (JSON.parse(token))
    this.userType = parsedToken.userType
    if (this.userType == "ADMIN") {
      this.router.navigate(['/landingPage'])
    }
  }
  
  downloadInovice() {
    this.cartService.download(this.stateService.currentOrder)
      .subscribe(data => {
        let downloadURL = window.URL.createObjectURL(data);
        saveAs(downloadURL);
      }, error => {
        console.log('Failed to download ' + JSON.stringify(error));
        this.stateService.toast.error(`Failed to download!`)
      })
  }
  
}