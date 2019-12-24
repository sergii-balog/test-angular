import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UsersComponent } from "./users.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { KendoComponentsModule } from "./../kendo-components/kendo-components.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UsersService } from "./../services/users.service";
import { Observable, from } from "rxjs";

class UsersServiceStub {
  getAllUsers() {
    return from([1, 2, 3]);
  }
}

describe("UsersComponent", () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [
        AngularFontAwesomeModule,
        KendoComponentsModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: UsersService, useClass: UsersServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
