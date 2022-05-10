import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProfileRoutingModule} from "../profile-routing.module";
import {ProfilePageComponent} from "./profile-page.component";

@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  providers: [],
})
export class ProfilePageModule {
}
