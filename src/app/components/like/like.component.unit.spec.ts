import { LikeComponent } from "./like.component";

describe("LikeComponent Unit tests", () => {
  let component: LikeComponent;
  beforeEach(() => {
    component = new LikeComponent();
  });

  it("should increase number of likes when liked", () => {
    component.isLiked = false;
    component.numberOfLikes = 0;

    component.onClick();

    expect(component.numberOfLikes).toBe(1);
  });
  it("should decrease number of likes when UNliked", () => {
    component.isLiked = true;
    component.numberOfLikes = 1;

    component.onClick();

    expect(component.numberOfLikes).toBe(0);
  });
  it("should change isLiked when liked", () => {
    component.isLiked = false;
    component.numberOfLikes = 0;

    component.onClick();

    expect(component.isLiked).toBeTruthy();
  });
  it("should change isLiked when UNliked", () => {
    component.isLiked = true;
    component.numberOfLikes = 1;

    component.onClick();

    expect(component.isLiked).toBeFalsy();
  });
});
