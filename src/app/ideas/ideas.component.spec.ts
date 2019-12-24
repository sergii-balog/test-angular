import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IdeasComponent } from "./ideas.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { KendoComponentsModule } from "./../kendo-components/kendo-components.module";
import { AppRoutingModule } from "./../app-routing.module";
import { HomePageComponent } from "../home-page/home-page.component";
import { MaterialTestComponent } from "../material-test/material-test.component";
import { GithubFollowersComponent } from "../github-followers/github-followers.component";

describe("IdeasComponent", () => {
  let component: IdeasComponent;
  let fixture: ComponentFixture<IdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IdeasComponent,
        HomePageComponent,
        MaterialTestComponent,
        GithubFollowersComponent
      ],
      imports: [
        AngularFontAwesomeModule,
        KendoComponentsModule,
        AppRoutingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
