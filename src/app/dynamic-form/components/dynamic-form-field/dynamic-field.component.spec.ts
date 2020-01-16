import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DynamicFormFieldComponent } from "./dynamic-form-field.component";

describe("DynamicFieldComponent", () => {
  let component: DynamicFormFieldComponent;
  let fixture: ComponentFixture<DynamicFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormFieldComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
