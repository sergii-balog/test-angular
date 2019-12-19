import { Component, OnInit, Input } from "@angular/core";
import { expandCollapse } from "../common/animations";

@Component({
  selector: "zippy",
  templateUrl: "./zippy.component.html",
  styleUrls: ["./zippy.component.css"],
  animations: [expandCollapse]
})
export class ZippyComponent {
  @Input() title: string;
  collapsed = true;

  toggle() {
    this.collapsed = !this.collapsed;
  }
}
