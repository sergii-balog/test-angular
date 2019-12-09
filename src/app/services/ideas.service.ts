import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class IdeasService extends DataService<any> {
  constructor(http: HttpClient, authService: AuthService) {
    super("https://feedback.lanteria.com/ideas", http, authService);
  }
}
