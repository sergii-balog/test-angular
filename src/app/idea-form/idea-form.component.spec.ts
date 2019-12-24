import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IdeaFormComponent } from "./idea-form.component";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./../app-routing.module";

describe("IdeaFormComponent", () => {
  let component: IdeaFormComponent;
  let fixture: ComponentFixture<IdeaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdeaFormComponent],
      imports: [FormsModule, AppRoutingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
