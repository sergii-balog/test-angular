import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BlogArticleComponent } from "./blog-article.component";
import { ActivatedRoute } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { HomePageComponent } from "../home-page/home-page.component";
import { MaterialTestComponent } from "../material-test/material-test.component";

describe("BlogArticleComponent", () => {
  let component: BlogArticleComponent;
  let fixture: ComponentFixture<BlogArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlogArticleComponent,
        HomePageComponent,
        MaterialTestComponent
      ],
      imports: [AppRoutingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
