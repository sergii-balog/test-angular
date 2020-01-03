import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BlogArticleComponent } from "./blog-article.component";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Observable, empty } from "rxjs";

class ActivatedRouteStub {
  params: Observable<any> = empty();
  snapshot = { paramMap: { get(name) {} } as ParamMap };
}
class RouterStub {
  navigate(params) {}
}

describe("BlogArticleComponent", () => {
  let component: BlogArticleComponent;
  let fixture: ComponentFixture<BlogArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogArticleComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
