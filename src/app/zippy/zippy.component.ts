import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "zippy",
  templateUrl: "./zippy.component.html",
  styleUrls: ["./zippy.component.css"]
})
export class ZippyComponent {
  @Input() title: string;
  collapsed = true;

  toggle() {
    this.collapsed = !this.collapsed;
  }
}
