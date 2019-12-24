import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  sanitizer: DomSanitizer;
  theme: string;
  constructor(_sanitizer: DomSanitizer) {
    this.sanitizer = _sanitizer;
  }
  ngOnInit() {
    this.theme = "/assets/themes/1.css";
  }
  changeTheme() {
    if (this.theme === "/assets/themes/1.css") {
      this.theme = "/assets/themes/2.css";
    } else if (this.theme === "/assets/themes/2.css") {
      this.theme = "/assets/themes/3.css";
    } else {
      this.theme = "/assets/themes/1.css";
    }
  }
}
