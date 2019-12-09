import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ILoginResponse } from "../models/login-response";
import { IUser } from "./../models/user";
import { catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { AppError } from "../common/errors/app-error";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private user: IUser;
  private url: string = "https://feedback.lanteria.com/auth/login";

  constructor(private http: HttpClient) {
    const user = localStorage.getItem("user");

    if (user) {
      this.user = JSON.parse(user);
    }
  }

  public login(credentials): Observable<ILoginResponse> {
    return this.http
      .post<ILoginResponse>(this.url, credentials, {
        observe: "response"
      })
      .pipe(
        map(response => {
          if (response.body.isOk) {
            localStorage.setItem("user", JSON.stringify(response.body.user));
            this.user = response.body.user;
          }

          return response.body;
        })
      )
      .pipe(catchError(this.handleError));
  }
  private handleError(error: Response) {
    return throwError(new AppError(error));
  }
  public logout() {
    localStorage.removeItem("user");
    this.user = null;
  }
  public isLoggedIn() {
    if (this.user) {
      return true;
    }
    return false;
  }
  public get currentUser() {
    return this.user;
  }
  public get isAdmin(): boolean {
    if (this.user && this.user.role === "Administrator") {
      return true;
    }
    return false;
  }
}
