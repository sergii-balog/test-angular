import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LikeComponent } from "./like.component";
import { By } from "@angular/platform-browser";
import { AngularFontAwesomeModule } from "angular-font-awesome";

describe("LikeComponent", () => {
  let component: LikeComponent;
  let fixture: ComponentFixture<LikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LikeComponent],
      imports: [AngularFontAwesomeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should highlight heart when component is liked", () => {
    component.isLiked = true;
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css(".heart"));
    expect(element.classes.liked).toBeTruthy();
  });
  it("should NOT highlight heart when component is NOT liked", () => {
    component.isLiked = false;
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css(".heart"));
    expect(element.classes.notLiked).toBeTruthy();
  });
  it("should display number of likes", () => {
    component.numberOfLikes = 1;
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css(".numberOfLikes"))
      .nativeElement;
    expect(element.innerText).toContain(1);
  });
  it("should call method on like", () => {
    const icon = fixture.debugElement.query(By.css(".heartIcon"));
    const method = spyOn(component, "onClick");

    icon.triggerEventHandler("click", null);
    fixture.detectChanges();

    expect(method).toHaveBeenCalled();
  });
});
