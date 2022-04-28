import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AdminModeComponent} from './admin-mode/admin-mode.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {ProfileEndingModeComponent} from './profile/profile-ending-mode/profile-ending-mode.component';
import {TimelineComponent} from './timeline/timeline.component';
import {PostComponent} from './timeline/post/post.component';
import {PostEndingModeComponent} from './timeline/post/post-ending-mode/post-ending-mode.component';
import {CommentsComponent} from './timeline/post/comments/comments.component';
import {CommentComponent} from './timeline/post/comments/comment/comment.component';
import {CreatingCommentComponent} from './timeline/post/comments/creating-comment/creating-comment.component';
import {CreatingPostComponent} from './timeline/creating-post/creating-post.component';
import {ProfileAvatarComponent} from './profile/profile-avatar/profile-avatar.component';
import {ProfileInfoComponent} from './profile/profile-info/profile-info.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { HeaderAdminModeComponent } from './admin-mode/header-admin-mode/header-admin-mode.component';
import { NavAdminModeComponent } from './admin-mode/nav-admin-mode/nav-admin-mode.component';
import { DashboardAdminModeComponent } from './admin-mode/dashboard-admin-mode/dashboard-admin-mode.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminModeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProfileEndingModeComponent,
    TimelineComponent,
    PostComponent,
    PostEndingModeComponent,
    CommentsComponent,
    CommentComponent,
    CreatingCommentComponent,
    CreatingPostComponent,
    ProfileAvatarComponent,
    ProfileInfoComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HeaderAdminModeComponent,
    NavAdminModeComponent,
    DashboardAdminModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
