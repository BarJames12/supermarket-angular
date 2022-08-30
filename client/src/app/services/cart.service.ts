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
    return this.http.get<any>("https://instacart-proj.herokuapp/carts/", options)
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
    this.http.put<any>("https://instacart-proj.herokuapp/carts/", productToUpdate, options).subscribe((response) => { response });
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
    this.http.delete<any>(`https://instacart-proj.herokuapp/carts/${cartId}/${productId}`, options).subscribe((response) => { response });
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
    this.http.post<any>(`https://instacart-proj.herokuapp/carts/`, productToAdd, options).subscribe((response) => { response });
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
    return this.http.post<SuccessfulLoginServerResponse>(`https://instacart-proj.herokuapp/carts/checkout`, checkoutDeatils, options)
      
  }

  public getTotalOrders() {
    return this.http.get("https://instacart-proj.herokuapp/carts/totalOrder")
  }

  public getUnavailableOrderDates() {
    return this.http.get("https://instacart-proj.herokuapp/carts/all-shippingDates")
  }

  public getCurrnetOrderId() {
    return this.http.get("https://instacart-proj.herokuapp/carts/get-current-orderId")
  }

  
  public download(file: String) {
    const body = { fileName: file }
    return this.http.post("https://instacart-proj.herokuapp/carts/download",body,{
      responseType : 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
  });
}

}


