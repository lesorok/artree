import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{
  path: "**",
  component: NotFoundPageComponent
}]

@NgModule({
  declarations: [NotFoundPageComponent],
  imports:      [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:    [],
})
export class NotFoundRoutingModule { }
