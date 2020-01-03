import { TestBed } from "@angular/core/testing";
import { AdminGuard } from "./admin-guard.service";
import { AppRoutingModule } from "../modules/app-routing.module";
import { HomePageComponent } from "../components/home-page/home-page.component";
import { MaterialTestComponent } from "../components/material-test/material-test.component";
import { PostsComponent } from "../components/posts/posts.component";
import { GithubFollowersComponent } from "../components/github-followers/github-followers.component";
import { ZipperLikeComponent } from "../components/zipper-like/zipper-like.component";
import { FormsPageComponent } from "../components/forms-page/forms-page.component";
import { BlogArticleComponent } from "../components/blog-article/blog-article.component";
import { BlogComponent } from "../components/blog/blog.component";
import { ReduxTestComponent } from "../components/redux-test/redux-test.component";
import { LoginFormComponent } from "../components/login-form/login-form.component";
import { IdeaFormComponent } from "../components/idea-form/idea-form.component";
import { IdeasComponent } from "../components/ideas/ideas.component";
import { LikeComponent } from "../components/like/like.component";
import { ZippyComponent } from "../components/zippy/zippy.component";
import { CourseFormComponent } from "../components/course-form/course-form.component";
import { ChangePasswordFormComponent } from "../components/change-password-form/change-password-form.component";
import { NavigationBarComponent } from "../components/navigation-bar/navigation-bar.component";
import { AppComponent } from "../components/app-component/app.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { AccessDeniedComponent } from "../components/access-denied/access-denied.component";
import { UsersComponent } from "../components/users/users.component";
import { ShortStringPipe } from "../pipes/short-string.pipe";
import { MdComponentsModule } from "../modules/md-components.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { KendoComponentsModule } from "../modules/kendo-components.module";
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
