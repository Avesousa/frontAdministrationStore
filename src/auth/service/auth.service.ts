import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Header } from "src/app/models/header";
import { environment } from '../../environments/environment'
import { Response } from "../interface/response.interface";
import { UserI } from "../interface/user.interface";


@Injectable()
export class AuthService {
    URL_SERVE = environment.server;
    authSubject = new BehaviorSubject(false);
    private token: string;
    private canActive: boolean = false;

    constructor(private http: HttpClient) { }

    login(user: UserI): Observable<Response> {
        return this.http.post<Response>(`${this.URL_SERVE}auth/login`,
            user).pipe(tap(
                (res: Response) => {
                    console.log(res);
                    if (res) {
                        this.saveToken(res.data.key, res.data.time);
                    }
                }
            ));
    }

    logout() {
        this.token = null;
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("TOKEN_TIME");
    }

    loginVerify(): Observable<Object> {
        return this.http.get(`${this.URL_SERVE}auth/verify`);
    }

    private saveToken(token: string, expireIn: string): void {
        localStorage.setItem("TOKEN", token);
        localStorage.setItem("TOKEN_TIME", expireIn);
        this.token = token;
    }

}