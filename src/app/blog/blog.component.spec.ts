import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BlogComponent } from "./blog.component";
import { AppRoutingModule } from "../app-routing.module";
import { HomePageComponent } from "../home-page/home-page.component";
import { MaterialTestComponent } from "../material-test/material-test.component";

describe("BlogComponent", () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogComponent, HomePageComponent, MaterialTestComponent],
      imports: [AppRoutingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
