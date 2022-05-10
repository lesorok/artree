import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RegisterRoutingModule } from "../register-routing.module";
import { RegisterPageComponent } from "./register-page.component";
import { RegisterFormComponent } from "./componets/register-form/register-form.component";

@NgModule({
  declarations: [
    RegisterPageComponent,
    RegisterFormComponent
  ],
  imports:      [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterRoutingModule
  ],
  providers:    [],
})
export class RegisterPageModule { }
