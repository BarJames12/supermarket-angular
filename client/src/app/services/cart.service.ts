import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuccessfulLoginServerResponse } from '../models/SuccessfulLoginServerResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}
  public getCart() {
    let token: any = localStorage.getItem('token');
    let parsedToken = JSON.parse(token);

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    };
    return this.http.get<any>(
      `${this.baseUrl}/carts/`,
      options
    );
  }

  public updateCart(productToUpdate: any) {
    let token: any = localStorage.getItem('token');
    let parsedToken = JSON.parse(token);

    const options = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    };
    this.http
      .put<any>(
        `${this.baseUrl}/carts/`,
        productToUpdate,
        options
      )
      .subscribe((response) => {
        response;
      });
  }

  public deleteFromCart(productId: number, cartId: number) {
    let token: any = localStorage.getItem('token');
    let parsedToken = JSON.parse(token);

    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    };
    this.http
      .delete<any>(
        `${this.baseUrl}/carts/${cartId}/${productId}`,
        options
      )
      .subscribe((response) => {
        response;
      });
  }

  public addToCart(productToAdd: any) {
    let token: any = localStorage.getItem('token');
    let parsedToken = JSON.parse(token);

    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    };
    this.http
      .post<any>(
        `${this.baseUrl}/carts/`,
        productToAdd,
        options
      )
      .subscribe((response) => {
        response;
      });
  }

  public checkout(
    checkoutDeatils: any
  ): Observable<SuccessfulLoginServerResponse> {
    let token: any = localStorage.getItem('token');
    let parsedToken = JSON.parse(token);

    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    };
    return this.http.post<SuccessfulLoginServerResponse>(
      `${this.baseUrl}/carts/checkout`,
      checkoutDeatils,
      options
    );
  }

  public getTotalOrders() {
    return this.http.get(
      `${this.baseUrl}/carts/totalOrder`
    );
  }

  public getUnavailableOrderDates() {
    return this.http.get(
      `${this.baseUrl}/carts/all-shippingDates`
    );
  }

  public getCurrnetOrderId() {
    return this.http.get(
      `${this.baseUrl}/carts/get-current-orderId`
    );
  }

  public download(file: String) {
    const body = { fileName: file };
    return this.http.post(
      `${this.baseUrl}/carts/download`,
      body,
      {
        responseType: 'blob',
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
      }
    );
  }
}
