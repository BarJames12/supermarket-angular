import { Injectable, } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StateService } from '../services/state.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  public constructor(private router: Router, public stateService: StateService) { }



  public canActivate(): boolean {
    const token: any = localStorage.getItem("token");
    if (token) {
      const parsedToken = (JSON.parse(token))
      let userType = parsedToken.userType
      this.stateService.username = parsedToken.username
      this.stateService.isLoggedIn = true
      if (userType == "USER") {
        return true
      }
      else if (userType == "ADMIN") {
        this.stateService.isAdmin = true
        return true
      }
    }
    this.router.navigateByUrl("/landingPage");
    return false;
  }


  // public canActivate(): boolean {
  //   const token: any = localStorage.getItem("token");
  //   let parsedToken = (JSON.parse(token))
  //   let userType = parsedToken.userType
  //   if (userType == "ADMIN") {
  //     return true
  //   }
  //   this.router.navigateByUrl("/landingPage");
  //   return false;

  // }
}