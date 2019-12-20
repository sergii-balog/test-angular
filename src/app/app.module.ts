import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
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
import { AccessDeniedComponent } from "./access-denied/access-denied.component";
import { UsersComponent } from "./users/users.component";
import { ShortStringPipe } from "./pipes/short-string.pipe";
import { IdeaFormComponent } from "./idea-form/idea-form.component";
import { IAppState, initialApplicationState } from "./redux/store";
import { ReduxTestComponent } from "./redux-test/redux-test.component";
import { rootReducer } from "./redux/reducers";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import "hammerjs";

import { MaterialTestComponent } from "./material-test/material-test.component";
import { MdComponentsModule } from "./md-components/md-components.module";
import { KendoComponentsModule } from "./kendo-components/kendo-components.module";

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
    ReduxTestComponent,
    MaterialTestComponent
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
    MdComponentsModule,
    KendoComponentsModule,
    BrowserAnimationsModule
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
