import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesPageComponent } from "./categories-page.component";
import { CategoryComponent } from './components/category/category.component';


const routes: Routes = [{
  path: '',
  component: CategoriesPageComponent
}]

@NgModule({
  declarations: [
    CategoriesPageComponent,
    CategoryComponent,
  ],
  imports:      [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers:    [],
})
export class CategoriesPageModule { }
