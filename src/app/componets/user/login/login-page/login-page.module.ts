import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {LoginPageComponent} from "./login-page.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {LoginRoutingModule} from "../login-routing.module";

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  providers: [],
})
export class LoginPageModule {
}
