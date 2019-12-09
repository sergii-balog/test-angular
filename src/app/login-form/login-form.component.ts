import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent {
  invalidLogin: boolean;
  errorMessage: string;
  constructor(private router: Router, private authService: AuthService) {}

  signIn(credentials) {
    this.authService.login(credentials).subscribe(result => {
      if (result.isOk) {
        this.router.navigate(["/"]);
      } else {
        this.invalidLogin = true;
        this.errorMessage = result.errorMessage;
      }
    });
  }
}
