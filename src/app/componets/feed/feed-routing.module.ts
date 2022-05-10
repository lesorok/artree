import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FeedPageComponent} from "./feed-page/feed-page.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [{
  path: '',
  component: FeedPageComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
