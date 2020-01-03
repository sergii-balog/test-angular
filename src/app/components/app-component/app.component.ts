import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { WeatherCondition, WeatherService } from "../../services/weather.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  theme: string;
  weather: WeatherCondition;

  constructor(
    public sanitizer: DomSanitizer,
    private weatherService: WeatherService
  ) {}
  ngOnInit() {
    this.theme = "/assets/themes/1.css";
    this.weatherService.getSubscription().subscribe(x => {
      this.weather = x;
    });
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
