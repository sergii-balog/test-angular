import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UsersComponent } from "./users.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { KendoComponentsModule } from "./../kendo-components/kendo-components.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("UsersComponent", () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [
        AngularFontAwesomeModule,
        KendoComponentsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
