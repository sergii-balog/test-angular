import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavigationBarComponent } from "./navigation-bar.component";
import { AppRoutingModule } from "./../app-routing.module";
import { HomePageComponent } from "../home-page/home-page.component";
import { MaterialTestComponent } from "../material-test/material-test.component";

describe("NavigationBarComponent", () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigationBarComponent,
        HomePageComponent,
        MaterialTestComponent
      ],
      imports: [AppRoutingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
