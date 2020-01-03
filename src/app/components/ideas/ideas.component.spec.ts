import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IdeasComponent } from "./ideas.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { KendoComponentsModule } from "../../modules/kendo-components.module";
import { Router } from "@angular/router";
import { IdeasService } from "../../services/ideas.service";
import { RouterTestingModule } from "@angular/router/testing";
import { ShortStringPipe } from "../../pipes/short-string.pipe";
import { Observable, from } from "rxjs";

class RouterStub {
  navigate(params) {}
}
class IdeasServiceStub {
  getAllIdeas() {
    return from([1, 2, 3]);
  }
}

describe("IdeasComponent", () => {
  let component: IdeasComponent;
  let fixture: ComponentFixture<IdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdeasComponent, ShortStringPipe],
      imports: [
        AngularFontAwesomeModule,
        KendoComponentsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: IdeasService, useClass: IdeasServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
