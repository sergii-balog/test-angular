import { TestBed } from "@angular/core/testing";
import { AdminGuard } from "./admin-guard.service";
import { AppRoutingModule } from "../app-routing.module";
import { HomePageComponent } from "../home-page/home-page.component";
import { MaterialTestComponent } from "../material-test/material-test.component";
import { PostsComponent } from "../posts/posts.component";
import { GithubFollowersComponent } from "../github-followers/github-followers.component";
import { ZipperLikeComponent } from "./../zipper-like/zipper-like.component";
import { FormsPageComponent } from "../forms-page/forms-page.component";
import { BlogArticleComponent } from "../blog-article/blog-article.component";
import { BlogComponent } from "../blog/blog.component";
import { ReduxTestComponent } from "../redux-test/redux-test.component";
import { LoginFormComponent } from "../login-form/login-form.component";
import { IdeaFormComponent } from "../idea-form/idea-form.component";
import { IdeasComponent } from "../ideas/ideas.component";
import { LikeComponent } from "../like/like.component";
import { ZippyComponent } from "../zippy/zippy.component";
import { CourseFormComponent } from "../course-form/course-form.component";
import { ChangePasswordFormComponent } from "../change-password-form/change-password-form.component";
import { NavigationBarComponent } from "../navigation-bar/navigation-bar.component";
import { AppComponent } from "../app.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { AccessDeniedComponent } from "../access-denied/access-denied.component";
import { UsersComponent } from "../users/users.component";
import { ShortStringPipe } from "../pipes/short-string.pipe";
import { MdComponentsModule } from "../md-components/md-components.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { KendoComponentsModule } from "../kendo-components/kendo-components.module";
import { HttpClientModule } from "@angular/common/http";

describe("AdminGuard", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        MdComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFontAwesomeModule,
        KendoComponentsModule,
        HttpClientModule
      ],

      declarations: [
        HomePageComponent,
        MaterialTestComponent,
        GithubFollowersComponent,
        PostsComponent,
        ZipperLikeComponent,
        FormsPageComponent,
        BlogArticleComponent,
        BlogComponent,
        ReduxTestComponent,
        LoginFormComponent,
        IdeaFormComponent,
        IdeasComponent,
        LikeComponent,
        ZippyComponent,
        CourseFormComponent,
        ChangePasswordFormComponent,
        NavigationBarComponent,
        NotFoundComponent,
        AccessDeniedComponent,
        UsersComponent,
        ShortStringPipe
      ]
    })
  );

  it("should be created", () => {
    const service: AdminGuard = TestBed.get(AdminGuard);
    expect(service).toBeTruthy();
  });
});
