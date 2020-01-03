import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GithubFollowersComponent } from "./github-followers.component";
import { HttpClientModule } from "@angular/common/http";

describe("GithubFollowersComponent", () => {
  let component: GithubFollowersComponent;
  let fixture: ComponentFixture<GithubFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GithubFollowersComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
