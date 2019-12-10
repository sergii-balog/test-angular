import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ZipperLikeComponent } from "./zipper-like.component";

describe("ZipperLikeComponent", () => {
  let component: ZipperLikeComponent;
  let fixture: ComponentFixture<ZipperLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipperLikeComponent ]
    })
    .compileComponents();
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
