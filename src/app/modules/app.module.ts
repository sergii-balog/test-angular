import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgReduxModule, NgRedux } from "@angular-redux/store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "../components/app-component/app.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { LikeComponent } from "../components/like/like.component";
import { ZippyComponent } from "../components/zippy/zippy.component";
import { CourseFormComponent } from "../components/course-form/course-form.component";
import { ChangePasswordFormComponent } from "../components/change-password-form/change-password-form.component";
import { PostsComponent } from "../components/posts/posts.component";
import { AppErrorHandler } from "../common/app-error-handler";
import { PostsService } from "../services/posts.service";
import { GithubFollowersComponent } from "../components/github-followers/github-followers.component";
import { GithubFollowersService } from "../services/github-followers.service";
import { HomePageComponent } from "../components/home-page/home-page.component";
import { NavigationBarComponent } from "../components/navigation-bar/navigation-bar.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { ZipperLikeComponent } from "../components/zipper-like/zipper-like.component";
import { FormsPageComponent } from "../components/forms-page/forms-page.component";
import { BlogComponent } from "../components/blog/blog.component";
import { BlogArticleComponent } from "../components/blog-article/blog-article.component";
import { LoginFormComponent } from "../components/login-form/login-form.component";
import { IdeasComponent } from "../components/ideas/ideas.component";
import { AccessDeniedComponent } from "../components/access-denied/access-denied.component";
import { UsersComponent } from "../components/users/users.component";
import { ShortStringPipe } from "../pipes/short-string.pipe";
import { IdeaFormComponent } from "../components/idea-form/idea-form.component";
import { IAppState, initialApplicationState } from "../redux/store";
import { ReduxTestComponent } from "../components/redux-test/redux-test.component";
import { rootReducer } from "../redux/reducers";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import "hammerjs";

import { MaterialTestComponent } from "../components/material-test/material-test.component";
import { MdComponentsModule } from "./md-components.module";
import { KendoComponentsModule } from "./kendo-components.module";
import { SignalrTestComponent } from "../components/signalr-test/signalr-test.component";
import { WeatherComponent } from "../components/weather/weather.component";

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
    MaterialTestComponent,
    SignalrTestComponent,
    WeatherComponent
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
