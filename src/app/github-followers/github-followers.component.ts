import { Component, OnInit } from "@angular/core";
import { GithubFollowersService } from "./../services/github-followers.service";
import { IFollower } from "./../models/follower";

@Component({
  selector: "github-followers",
  templateUrl: "./github-followers.component.html",
  styleUrls: ["./github-followers.component.css"]
})
export class GithubFollowersComponent implements OnInit {
  followers: IFollower[];
  constructor(private service: GithubFollowersService) {}

  ngOnInit() {
    this.service.getAll().subscribe(followers => (this.followers = followers));
  }
}
