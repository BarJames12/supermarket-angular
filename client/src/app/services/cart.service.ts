import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { SuccessfulLoginServerResponse } from '../models/SuccessfulLoginServerResponse';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private http: HttpClient) { }
  public getCart() {
    let token: any = (localStorage.getItem('token'))
    let parsedToken = JSON.parse(token)

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${parsedToken.token}`

      }
    }
    return this.http.get<any>("http://localhost:3001/carts/", options)
  }

  public updateCart(productToUpdate: any) {
    let token: any = (localStorage.getItem('token'))
    let parsedToken = JSON.parse(token)

    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${parsedToken.token}`
      }
    }
    this.http.put<any>("http://localhost:3001/carts/", productToUpdate, options).subscribe((response) => { response });
  }


  public deleteFromCart(productId: number, cartId: number) {
    let token: any = (localStorage.getItem('token'))
    let parsedToken = JSON.parse(token)

    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${parsedToken.token}`
      }
    }
    this.http.delete<any>(`http://localhost:3001/carts/${cartId}/${productId}`, options).subscribe((response) => { response });
  }

  public addToCart(productToAdd: any) {
    let token: any = (localStorage.getItem('token'))
    let parsedToken = JSON.parse(token)

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${parsedToken.token}`
      }
    }
    this.http.post<any>(`http://localhost:3001/carts/`, productToAdd, options).subscribe((response) => { response });
  }

  public checkout(checkoutDeatils: any): Observable<SuccessfulLoginServerResponse> {
    let token: any = (localStorage.getItem('token'))
    let parsedToken = JSON.parse(token)

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${parsedToken.token}`
      }
    }
    return this.http.post<SuccessfulLoginServerResponse>(`http://localhost:3001/carts/checkout`, checkoutDeatils, options)
      
  }

  public getTotalOrders() {
    return this.http.get("http://localhost:3001/carts/totalOrder")
  }

  public getUnavailableOrderDates() {
    return this.http.get("http://localhost:3001/carts/all-shippingDates")
  }

  public getCurrnetOrderId() {
    return this.http.get("http://localhost:3001/carts/get-current-orderId")
  }

  
  public download(file: String) {
    const body = { fileName: file }
    return this.http.post("http://localhost:3001/carts/download",body,{
      responseType : 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
  });
}

}


