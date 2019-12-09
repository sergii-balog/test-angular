import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ILoginResponse } from "../models/login-response";
import { IUser } from "./../models/user";

@Injectable({
  providedIn: "root"
})
export class AuthService extends DataService<ILoginResponse> {
  public currentUser: IUser;

  constructor(http: HttpClient) {
    super("https://feedback.lanteria.com/auth/login", http);
    const user = localStorage.getItem("user");

    if (user) {
      this.currentUser = JSON.parse(user);
    }
  }

  login(credentials) {
    return this.create(credentials).pipe(
      map(response => {
        if (response.isOk) {
          localStorage.setItem("user", JSON.stringify(response.user));
          this.currentUser = response.user;
        }

        return response;
      })
    );
  }

  logout() {
    localStorage.removeItem("user");
    this.currentUser = null;
  }

  isLoggedIn() {
    if (this.currentUser) {
      return true;
    }
    return false;
  }
}
