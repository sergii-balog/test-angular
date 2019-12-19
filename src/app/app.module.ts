import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NgReduxModule, NgRedux } from "@angular-redux/store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { LikeComponent } from "./like/like.component";
import { ZippyComponent } from "./zippy/zippy.component";
import { CourseFormComponent } from "./course-form/course-form.component";
import { ChangePasswordFormComponent } from "./change-password-form/change-password-form.component";
import { PostsComponent } from "./posts/posts.component";
import { AppErrorHandler } from "./common/app-error-handler";
import { PostsService } from "./services/posts.service";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { GithubFollowersService } from "./services/github-followers.service";
import { HomePageComponent } from "./home-page/home-page.component";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ZipperLikeComponent } from "./zipper-like/zipper-like.component";
import { FormsPageComponent } from "./forms-page/forms-page.component";
import { BlogComponent } from "./blog/blog.component";
import { BlogArticleComponent } from "./blog-article/blog-article.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { IdeasComponent } from "./ideas/ideas.component";
import { AuthGuard } from "./services/auth-guard.service";
import { AccessDeniedComponent } from "./access-denied/access-denied.component";
import { AdminGuard } from "./services/admin-guard.service";
import { UsersComponent } from "./users/users.component";
import { ShortStringPipe } from "./pipes/short-string.pipe";
import { IdeaFormComponent } from "./idea-form/idea-form.component";
import { IAppState, initialApplicationState } from "./redux/store";
import { ReduxTestComponent } from "./redux-test/redux-test.component";
import { rootReducer } from "./redux/reducers";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule } from "@progress/kendo-angular-charts";
import "hammerjs";
import { GridModule } from "@progress/kendo-angular-grid";
import { PDFExportModule } from "@progress/kendo-angular-pdf-export";

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    ZippyComponent,
    CourseFormComponent,
    ChangePasswordFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    HomePageComponent,
    NavigationBarComponent,
    NotFoundComponent,
    ZipperLikeComponent,
    FormsPageComponent,
    BlogComponent,
    BlogArticleComponent,
    LoginFormComponent,
    IdeasComponent,
    AccessDeniedComponent,
    UsersComponent,
    ShortStringPipe,
    IdeaFormComponent,
    ReduxTestComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgReduxModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomePageComponent
      },
      { path: "followers", component: GithubFollowersComponent },
      { path: "posts", component: PostsComponent },
      { path: "zipper-like", component: ZipperLikeComponent },
      { path: "forms", component: FormsPageComponent },
      { path: "blog/:year/:month", component: BlogArticleComponent },
      { path: "blog", component: BlogComponent },
      { path: "redux-test", component: ReduxTestComponent },
      { path: "login", component: LoginFormComponent },
      {
        path: "new-idea",
        component: IdeaFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "idea/:id",
        canActivate: [AuthGuard],
        children: [
          {
            path: "",
            component: IdeaFormComponent,
            canActivate: [AdminGuard]
          }
        ]
      },
      {
        path: "ideas",
        component: IdeasComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "users",
        canActivate: [AuthGuard],
        children: [
          {
            path: "",
            component: UsersComponent,
            canActivate: [AdminGuard]
          }
        ]
      },
      { path: "access-denied", component: AccessDeniedComponent },
      { path: "**", component: NotFoundComponent }
    ]),
    ButtonsModule,
    BrowserAnimationsModule,
    ChartsModule,
    GridModule,
    PDFExportModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    PostsService,
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, initialApplicationState);
  }
}
