import { TestBed } from "@angular/core/testing";

import { IdeasService } from "./ideas.service";
import { HttpClientModule } from "@angular/common/http";

describe("IdeasService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it("should be created", () => {
    const service: IdeasService = TestBed.get(IdeasService);
    expect(service).toBeTruthy();
  });
});
