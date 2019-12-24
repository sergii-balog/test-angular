import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ZipperLikeComponent } from "./zipper-like.component";
import { LikeComponent } from "./../like/like.component";
import { ZippyComponent } from "./../zippy/zippy.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("ZipperLikeComponent", () => {
  let component: ZipperLikeComponent;
  let fixture: ComponentFixture<ZipperLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZipperLikeComponent, LikeComponent, ZippyComponent],
      imports: [AngularFontAwesomeModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipperLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
