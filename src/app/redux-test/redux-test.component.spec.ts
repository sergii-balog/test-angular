import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ReduxTestComponent } from "./redux-test.component";
import { NgReduxModule, NgRedux } from "@angular-redux/store";

describe("ReduxTestComponent", () => {
  let component: ReduxTestComponent;
  let fixture: ComponentFixture<ReduxTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReduxTestComponent],
      imports: [NgReduxModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
