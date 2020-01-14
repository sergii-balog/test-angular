import "hammerjs";

import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppErrorHandler } from "../common/app-error-handler";
import { AccessDeniedComponent } from "../components/access-denied/access-denied.component";
import { AppComponent } from "../components/app-component/app.component";
import { BlogArticleComponent } from "../components/blog-article/blog-article.component";
import { BlogComponent } from "../components/blog/blog.component";
import { ChangePasswordFormComponent } from "../components/change-password-form/change-password-form.component";
import { CourseFormComponent } from "../components/course-form/course-form.component";
import { DynamicFormDisplayComponent } from "../components/dynamic-form/dynamic-form.component";
import { FormsPageComponent } from "../components/forms-page/forms-page.component";
import { GithubFollowersComponent } from "../components/github-followers/github-followers.component";
import { HomePageComponent } from "../components/home-page/home-page.component";
import { IdeaFormComponent } from "../components/idea-form/idea-form.component";
import { IdeasComponent } from "../components/ideas/ideas.component";
import { LikeComponent } from "../components/like/like.component";
import { LoginFormComponent } from "../components/login-form/login-form.component";
import { MaterialTestComponent } from "../components/material-test/material-test.component";
import { NavigationBarComponent } from "../components/navigation-bar/navigation-bar.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { PostsComponent } from "../components/posts/posts.component";
import { ReduxTestComponent } from "../components/redux-test/redux-test.component";
import { SignalrTestComponent } from "../components/signalr-test/signalr-test.component";
import { UsersComponent } from "../components/users/users.component";
import { WeatherComponent } from "../components/weather/weather.component";
import { ZipperLikeComponent } from "../components/zipper-like/zipper-like.component";
import { ZippyComponent } from "../components/zippy/zippy.component";
import { DynamicFormModule } from "../dynamic-form/dynamic-form.module";
import { ShortStringPipe } from "../pipes/short-string.pipe";
import { rootReducer } from "../redux/reducers";
import { IAppState, initialApplicationState } from "../redux/store";
import { GithubFollowersService } from "../services/github-followers.service";
import { PostsService } from "../services/posts.service";
import { AppRoutingModule } from "./app-routing.module";
import { KendoComponentsModule } from "./kendo-components.module";
import { MdComponentsModule } from "./md-components.module";

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
    WeatherComponent,
    DynamicFormDisplayComponent
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
    BrowserAnimationsModule,
    DynamicFormModule
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
