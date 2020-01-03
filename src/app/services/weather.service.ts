import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export interface WeatherCondition {
  title: string;
  iconUrl: string;
}

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  public conditions: WeatherCondition[] = [
    {
      title: "Clear Sky",
      iconUrl: "http://openweathermap.org/img/wn/01d.png"
    },
    {
      title: "Few Clouds",
      iconUrl: "http://openweathermap.org/img/wn/02d.png"
    },
    {
      title: "Scattered Clouds",
      iconUrl: "http://openweathermap.org/img/wn/03d.png"
    },
    {
      title: "Broken Clouds",
      iconUrl: "http://openweathermap.org/img/wn/04d.png"
    },
    {
      title: "Shower Rain",
      iconUrl: "http://openweathermap.org/img/wn/09d.png"
    },
    {
      title: "Rain",
      iconUrl: "http://openweathermap.org/img/wn/10d.png"
    },
    {
      title: "Thunderstorm",
      iconUrl: "http://openweathermap.org/img/wn/11d.png"
    },
    {
      title: "Snow",
      iconUrl: "http://openweathermap.org/img/wn/13d.png"
    },
    {
      title: "Mist",
      iconUrl: "http://openweathermap.org/img/wn/50d.png"
    }
  ];
  subject: Subject<WeatherCondition>;

  constructor() {
    this.subject = new Subject();
  }
  getSubscription() {
    return this.subject.asObservable();
  }
  updateCondition(newCondition) {
    const condition = this.conditions.find(x => x.title === newCondition);
    this.subject.next(condition);
  }
}
