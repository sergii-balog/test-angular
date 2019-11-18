import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<any>("http://jsonplaceholder.typicode.com/posts", {
        observe: "response"
      })
      .subscribe(resp => {
        // resp.headers
        //   .keys()
        //   .map(x => console.log(`${x}: ${resp.headers.get(x)}`));
        this.posts = resp.body;
      });
    this.http
      .post(
        "http://jsonplaceholder.typicode.com/posts",
        {},
        {
          observe: "response"
        }
      )
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
