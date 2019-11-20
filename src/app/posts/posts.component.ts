import { Component, OnInit } from "@angular/core";
import { PostsService } from "../services/posts.service";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostsService) {}
  ngOnInit(): void {
    this.service.getPosts().subscribe(resp => {
      // resp.headers
      //   .keys()
      //   .map(x => console.log(`${x}: ${resp.headers.get(x)}`));
      this.posts = resp.body;
    });
    this.service.addService({}).subscribe(resp => {
      console.log(resp);
    });
  }
}
