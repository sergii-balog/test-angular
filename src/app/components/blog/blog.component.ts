import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  archive = [
    { year: 2019, month: 1 },
    { year: 2019, month: 2 },
    { year: 2019, month: 3 }
  ];
  constructor() {}

  ngOnInit() {}
}
