import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private httpClient: HttpClient) { }

  // public upload(formData) {
  //   console.log(formData);
  //   return this.httpClient.post<any>(`http://localhost:3001/products/picture`, formData);
  // }
}

