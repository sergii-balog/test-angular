import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

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

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    ZippyComponent,
    CourseFormComponent,
    ChangePasswordFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
