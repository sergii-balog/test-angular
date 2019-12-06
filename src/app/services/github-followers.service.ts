import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { HttpClient } from "@angular/common/http";
import { IFollower } from "../models/follower";

@Injectable({
  providedIn: "root"
})
export class GithubFollowersService extends DataService<IFollower> {
  constructor(http: HttpClient) {
    super("https://api.github.com/users/sbal323/followers", http);
  }
}
