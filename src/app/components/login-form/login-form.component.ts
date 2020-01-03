import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent {
  invalidLogin: boolean;
  errorMessage: string;
  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  signIn(credentials) {
    this.authService.login(credentials).subscribe(result => {
      if (result.isOk) {
        const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
        this.router.navigate([returnUrl || "/"]);
      } else {
        this.invalidLogin = true;
        this.errorMessage = result.errorMessage;
      }
    });
  }
}
