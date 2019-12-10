import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.css"]
})
export class NavigationBarComponent implements OnInit {
  authService: AuthService;
  constructor(private router: Router, private service: AuthService) {
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
