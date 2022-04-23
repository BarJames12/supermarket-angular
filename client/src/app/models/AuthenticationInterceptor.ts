import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from '../services/user.service';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    // They will need to use their own userService for this (need save the token there after login)
    constructor(private userService: UsersService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with our token if available
        let token: any;
        
        token = localStorage.getItem("token");
        if (token) {
            let parsedToken = (JSON.parse(token))
            let realToken = parsedToken.token
            console.log(realToken);
            request = request.clone({
                setHeaders: {
                    Authorization: realToken
                }
            });
        }
        return next.handle(request);
    }
}
