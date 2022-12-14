import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuccessfulLoginServerResponse } from '../models/SuccessfulLoginServerResponse';
import { UserModel } from '../models/UserModel';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  public login(
    userModel: UserModel
  ): Observable<SuccessfulLoginServerResponse> {
    return this.http.post<SuccessfulLoginServerResponse>(
      `${this.baseUrl}/users/login`,
      userModel
    );
  }

  public signup(
    userModel: UserModel
  ): Observable<SuccessfulLoginServerResponse> {
    return this.http.post<SuccessfulLoginServerResponse>(
      `${this.baseUrl}/users`,
      userModel
    );
  }

  public getPersonalInfo() {
    let token: any = localStorage.getItem('token');
    let parsedToken = JSON.parse(token);

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    };
    return this.http.get<any>(`${this.baseUrl}/users/`, options);
  }
}
