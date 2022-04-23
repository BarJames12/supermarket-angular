import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UserModel } from 'src/app/models/UserModel';
import { CartService } from 'src/app/services/cart.service';
import { StateService } from 'src/app/services/state.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(private usersService: UsersService, private router: Router, public stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.serverError = " "
  }

  public onLoginClick() {
    
    let loginDeatils = new UserModel(this.username, this.password);
    const observable = this.usersService.login(loginDeatils)

    observable.subscribe((successfulServerRequestData) => {
      console.log(successfulServerRequestData);
      localStorage.setItem('token', JSON.stringify(successfulServerRequestData))

      this.router.navigate(['/home']).then(() => {
      });
      this.stateService.toast.success(`Welcome ${this.username}!`, {
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

    }, ServerErrorResponse => {
      
      this.stateService.isServerError = this.stateService.isServerError ? true : true;
      console.log(this.stateService.isServerError);

      this.stateService.serverError = JSON.parse(JSON.stringify(ServerErrorResponse.error.error))
    })

  }

}

