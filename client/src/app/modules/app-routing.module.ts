import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { RegisterComponent } from '../components/register/register.component';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { AfterCheckoutComponent } from '../components/after-checkout/after-checkout.component';
import { LoginGuard } from '../guards/login.guard';

const routes: Routes = [
  { path: "landingPage", component: LandingPageComponent},
  { path: "home", component: HomeComponent, canActivate: [LoginGuard]},
  
  { path: 'register', component: RegisterComponent },
  { path: 'after-checkout', component: AfterCheckoutComponent, canActivate: [LoginGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [LoginGuard]},
  { path: "", redirectTo: "landingPage", pathMatch: "full" }, // pathMatch = התאמת המחרוזת הריקה לכלל הנתיב
  // { path: "**", component: Page404Component } // Page not Found (Must be the last one!!!)
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // Importing the above routes
  ],
  exports: [RouterModule]
})
export class RoutingModule {

}
