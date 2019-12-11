import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../services/auth.service";
import { Router } from "@angular/router";
import { select, NgRedux } from "@angular-redux/store";
import { IAppState } from "../redux/store";
import { Observable } from "rxjs";

@Component({
  selector: "navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.css"]
})
export class NavigationBarComponent implements OnInit {
  @select() count: Observable<number>;
  authService: AuthService;
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private router: Router,
    private service: AuthService
  ) {
    this.authService = service;
  }

  ngOnInit() {}
  public userName() {
    if (this.authService.currentUser) {
      return this.authService.currentUser.fullName;
    }
    return "";
  }
  public logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
