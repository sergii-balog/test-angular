import { TestBed } from "@angular/core/testing";

import { GithubFollowersService } from "./github-followers.service";
import { HttpClientModule } from "@angular/common/http";

describe("GithubFollowersService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it("should be created", () => {
    const service: GithubFollowersService = TestBed.get(GithubFollowersService);
    expect(service).toBeTruthy();
  });
});
