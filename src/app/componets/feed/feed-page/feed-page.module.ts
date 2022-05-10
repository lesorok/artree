import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FeedPageComponent} from "./feed-page.component";
import {PostComponent} from "./componets/post/post.component";
import {FeedRoutingModule} from "../feed-routing.module";

@NgModule({
  declarations: [
    FeedPageComponent,
    PostComponent
  ],
  imports:      [
    CommonModule,
    FeedRoutingModule,
  ],
  providers:    [],
})
export class FeedPageModule { }
