import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CategoriesPageComponent} from "./categories-page/categories-page.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [{
  path: '',
  component: CategoriesPageComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
