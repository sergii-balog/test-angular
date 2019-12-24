import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MaterialTestComponent } from "./material-test.component";
import { MdComponentsModule } from "../md-components/md-components.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("MaterialTestComponent", () => {
  let component: MaterialTestComponent;
  let fixture: ComponentFixture<MaterialTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialTestComponent],
      imports: [MdComponentsModule, FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
