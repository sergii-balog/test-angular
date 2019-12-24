import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IdeaFormComponent } from "./idea-form.component";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./../app-routing.module";
import { Observable, empty } from "rxjs";
import { ParamMap, Router, ActivatedRoute } from "@angular/router";
import { IdeasService } from "../services/ideas.service";

class ActivatedRouteStub {
  params: Observable<any> = empty();
  snapshot = { paramMap: { get(name) {} } as ParamMap };
}
class RouterStub {
  navigate(params) {}
}
class IdeasServiceStub {}

describe("IdeaFormComponent", () => {
  let component: IdeaFormComponent;
  let fixture: ComponentFixture<IdeaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdeaFormComponent],
      imports: [FormsModule],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: IdeasService, useClass: IdeasServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
