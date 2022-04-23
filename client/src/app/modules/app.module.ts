import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app-routing.module';
import { AppComponent } from '../components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from '../components/layout/layout.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../components/login/login.component';
import { CartComponent } from '../components/cart/cart.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { RegisterComponent } from '../components/register/register.component';
import { CategoryComponent } from '../components/category/category.component';
import { ProductsCardComponent } from '../components/products-card/products-card.component';
import { CategoryPipe } from '../pipes/category.pipe';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AfterCheckoutComponent } from '../components/after-checkout/after-checkout.component';
import { HighlightPipe } from '../pipes/highlight.pipe';
import { AdminManageProductComponent } from '../components/admin-manage-product/admin-manage-product.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HotToastModule } from '@ngneat/hot-toast';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    RegisterComponent,
    CategoryComponent,
    ProductsCardComponent,
    CategoryPipe,
    SearchFilterPipe,
    LandingPageComponent,
    AfterCheckoutComponent,
    HighlightPipe,
    AdminManageProductComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    HotToastModule.forRoot()
  ],

  providers: [DatePipe],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
