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
      title: "clear sky",
      iconUrl: "http://openweathermap.org/img/wn/01d.png"
    },
    {
      title: "few clouds",
      iconUrl: "http://openweathermap.org/img/wn/02d.png"
    },
    {
      title: "scattered clouds",
      iconUrl: "http://openweathermap.org/img/wn/03d.png"
    },
    {
      title: "broken clouds",
      iconUrl: "http://openweathermap.org/img/wn/04d.png"
    },
    {
      title: "shower rain",
      iconUrl: "http://openweathermap.org/img/wn/09d.png"
    },
    {
      title: "rain",
      iconUrl: "http://openweathermap.org/img/wn/10d.png"
    }
  ];
  subject: Subject;

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
