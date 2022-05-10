import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {CategoriesPageComponent} from "./categories-page.component";
import {CategoriesRoutingModule} from "../categories-routing.module";
@NgModule({
  declarations: [
    CategoriesPageComponent,
  ],
  imports:      [
    CommonModule,
    CategoriesRoutingModule
  ],
  providers:    [],
})
export class CategoriesPageModule { }
