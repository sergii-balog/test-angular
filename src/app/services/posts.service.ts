import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "./data.service";
import { IPost } from "./../models/post";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class PostsService extends DataService<IPost> {
  constructor(http: HttpClient) {
    super("https://jsonplaceholder.typicode.com/posts", http);
  }
}
