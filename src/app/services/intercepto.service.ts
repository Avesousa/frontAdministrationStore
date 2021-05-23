import { HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(req, next) {
        const token = req.clone({
            setHeaders: {
                Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
            }
        });
        return next.handle(token);
    }


}