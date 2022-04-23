import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';
import { StateService } from 'src/app/services/state.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string = "";
  password: string = "";
  confirmPassword: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  city: string = "";
  address: string = "";


  constructor(private usersService: UsersService, private router: Router, public stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.serverError = " "
  }

  public onSignupClick() {
    let signupDeatils = new UserModel(this.username, this.password, this.confirmPassword, this.firstName, this.lastName, this.email, this.city, this.address);
    console.log(signupDeatils);

    const observable = this.usersService.signup(signupDeatils)

    observable.subscribe((successfulServerRequestData) => {
      console.log(successfulServerRequestData);
      this.stateService.toast.success(`Register success!`);
      this.router.navigate(["/landingPage"]);

    }, ServerErrorResponse => {
      this.stateService.isServerError = this.stateService.isServerError ? true : true;
      console.log(this.stateService.isServerError);
      this.stateService.toast.error(`Register Failed!`)
      this.stateService.serverError = JSON.parse(JSON.stringify(ServerErrorResponse.error.error))
    })

  }

}
