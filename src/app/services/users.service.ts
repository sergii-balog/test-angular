import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { AuthDataService } from "./auth-data.service";
import { Observable } from "rxjs";
import { UsersResult } from "./../models/Results/users-result";
import { BaseResult } from "./../models/Results/base-result";
import { User } from "../models/Results/user";
import { UserResult } from "../models/Results/user-result";

@Injectable({
  providedIn: "root"
})
export class UsersService extends AuthDataService {
  constructor(http: HttpClient, authService: AuthService) {
    super("https://feedback.lanteria.com/users", http, authService);
  }
  public getAllUsers(): Observable<UsersResult> {
    return this.getAll<UsersResult>();
  }
  public deleteUser(user: User): Observable<UserResult> {
    return this.delete<User, UserResult>(user);
  }
}
