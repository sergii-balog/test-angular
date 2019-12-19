import { Component, OnInit } from "@angular/core";
import { fade, slideRight, slideLeft } from "../common/animations";

@Component({
  selector: "home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
  animations: [fade, slideRight, slideLeft]
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
