import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormsPageComponent } from "./forms-page.component";
import { CourseFormComponent } from "./../course-form/course-form.component";
import { ChangePasswordFormComponent } from "../change-password-form/change-password-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("FormsPageComponent", () => {
  let component: FormsPageComponent;
  let fixture: ComponentFixture<FormsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormsPageComponent,
        CourseFormComponent,
        ChangePasswordFormComponent
      ],
      imports: [FormsModule, ReactiveFormsModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
