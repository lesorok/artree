import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {LoginPageModule} from "./login-page/login-page.module";

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  }]

@NgModule({
  imports:      [
    LoginPageModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class LoginRoutingModule { }
