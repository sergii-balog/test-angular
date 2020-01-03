import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "like",
  templateUrl: "./like.component.html",
  styleUrls: ["./like.component.css"]
})
export class LikeComponent {
  @Input() numberOfLikes: number;
  @Input() isLiked: boolean;
  @Output() changed = new EventEmitter();

  onClick() {
    this.isLiked = !this.isLiked;
    this.isLiked ? this.numberOfLikes++ : this.numberOfLikes--;
    this.changed.emit({ isLiked: this.isLiked });
  }
}
