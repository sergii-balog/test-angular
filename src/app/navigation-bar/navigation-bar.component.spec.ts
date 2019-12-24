import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavigationBarComponent } from "./navigation-bar.component";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { NgRedux } from "@angular-redux/store";
import { AuthService } from "./../services/auth.service";

class AuthServiceStub {
  isLoggedIn() {
    return false;
  }
}

describe("NavigationBarComponent", () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationBarComponent],
      imports: [RouterTestingModule],
      providers: [NgRedux, { provide: AuthService, useClass: AuthServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
