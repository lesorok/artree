import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProfileRoutingModule} from "../profile-routing.module";
import {ProfilePageComponent} from "./profile-page.component";
import {PostModule} from "../../../feed/feed-page/componets/post/post.module";

@NgModule({
  declarations: [
    ProfilePageComponent,
  ],
  imports: [
    CommonModule,
    PostModule,
    ProfileRoutingModule
  ],
  providers: [],
})
export class ProfilePageModule {
}
