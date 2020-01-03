import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { MaterialTestComponent } from "./material-test/material-test.component";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { PostsComponent } from "./posts/posts.component";
import { ZipperLikeComponent } from "./zipper-like/zipper-like.component";
import { FormsPageComponent } from "./forms-page/forms-page.component";
import { BlogArticleComponent } from "./blog-article/blog-article.component";
import { BlogComponent } from "./blog/blog.component";
import { ReduxTestComponent } from "./redux-test/redux-test.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { IdeaFormComponent } from "./idea-form/idea-form.component";
import { AuthGuard } from "./services/auth-guard.service";
import { AdminGuard } from "./services/admin-guard.service";
import { IdeasComponent } from "./ideas/ideas.component";
import { UsersComponent } from "./users/users.component";
import { AccessDeniedComponent } from "./access-denied/access-denied.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SignalrTestComponent } from "./signalr-test/signalr-test.component";
import { WeatherComponent } from "./weather/weather.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  { path: "material-test", component: MaterialTestComponent },
  { path: "followers", component: GithubFollowersComponent },
  { path: "posts", component: PostsComponent },
  { path: "zipper-like", component: ZipperLikeComponent },
  { path: "forms", component: FormsPageComponent },
  { path: "blog/:year/:month", component: BlogArticleComponent },
  { path: "blog", component: BlogComponent },
  { path: "redux-test", component: ReduxTestComponent },
  { path: "signalr-test", component: SignalrTestComponent },
  { path: "login", component: LoginFormComponent },
  { path: "weather", component: WeatherComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
