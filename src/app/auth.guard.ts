import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { AuthService } from "src/auth/service/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private _authService: AuthService,
        private router: Router
    ) { }
    canActivate(): Observable<boolean> {
        console.log("Verify canActivate")
        console.log(window.location.href);
        try {
            
        } catch (error) {
            
        }
        return this._authService.loginVerify().pipe(
            map((res: any) =>{
                if(!res.data){
                    this.router.navigateByUrl('/auth/login');
                } 
                return res.data;
            }),
            );
    }
}