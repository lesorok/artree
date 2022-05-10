import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FeedPageComponent} from "./feed-page.component";
import {FeedRoutingModule} from "../feed-routing.module";
import {PostModule} from "./componets/post/post.module";

@NgModule({
  declarations: [
    FeedPageComponent,
  ],
  imports: [
    CommonModule,
    PostModule,
    FeedRoutingModule,
  ],
  providers: [],
})
export class FeedPageModule { }
