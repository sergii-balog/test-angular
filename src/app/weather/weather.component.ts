import { Component, OnInit, OnDestroy } from "@angular/core";
import { WeatherService, WeatherCondition } from "../services/weather.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit, OnDestroy {
  constructor(public service: WeatherService) {}
  subscription: Subscription;
  condition: WeatherCondition;
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  updateCondition(newCondition) {
    this.service.updateCondition(newCondition);
  }
  ngOnInit() {
    this.subscription = this.service.getSubscription().subscribe(x => {
      this.condition = x;
    });
  }
}
