import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FeedPageComponent } from "./feed-page.component";
import { FeedRoutingModule } from "../feed-routing.module";
import { PostModule } from "./componets/post/post.module";
import { NewPostModule } from "../../new-post/new-post-page/componets/new-post/new-post.module";
import { CommentModule } from "./componets/comment/comment.module";

@NgModule({
  declarations: [
    FeedPageComponent,
  ],
  imports: [
    CommonModule,
    PostModule,
    NewPostModule,
    CommentModule,
    FeedRoutingModule,
  ],
  providers: [],
})
export class FeedPageModule {
}
