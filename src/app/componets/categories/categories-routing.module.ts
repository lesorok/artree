import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";

const routes: Routes = [{
    path: '',
    loadChildren: () =>
      import(
        './categories-page/categories-page.module'
        ).then((m) => m.CategoriesPageModule),
  }]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
