import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IProducts } from '../models/IProducts';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { CategoryModel } from '../models/CategoryModel';
import { SuccessfulLoginServerResponse } from '../models/SuccessfulLoginServerResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: IProducts[] = [];
  public categories: CategoryModel[] = [];

  constructor(private http: HttpClient) { }

  /*  Getting all products from server  */
  public getAllProducts() {
    const options = {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token')
      }
    }
    return this.http.get<{ products: IProducts }[]>("http://localhost:3001/products/", options)
  }



  public updateProduct(newProductDetails: any) {
    let token: any = (localStorage.getItem('token'))
    let parsedToken = JSON.parse(token)

    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${parsedToken.token}`
      }
    }
    return this.http.put<any>("http://localhost:3001/products/", newProductDetails, options);
  }

  public addNewProduct(newProduct: any): Observable<SuccessfulLoginServerResponse> {
    let token: any = (localStorage.getItem('token'))
    let parsedToken = JSON.parse(token)

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${parsedToken.token}`
      }
    }
    return this.http.post<SuccessfulLoginServerResponse>(`http://localhost:3001/products/`, newProduct, options)
  }





}
