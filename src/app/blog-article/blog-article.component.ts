import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-blog-article",
  templateUrl: "./blog-article.component.html",
  styleUrls: ["./blog-article.component.css"]
})
export class BlogArticleComponent implements OnInit {
  year: number;
  month: number;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.year = +params.get("year");
    this.month = +params.get("month");
  }
  goBack() {
    this.router.navigate(["/blog"]);
  }
}
