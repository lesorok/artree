import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";

import {LoginModule} from "./login/login.module";
import {RegisterModule} from "./register/register.module";

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {TimelineModule} from "./timeline/timeline.module";
import {AdminModeModule} from "./admin-mode/admin-mode.module";
import {ProfileModule} from "./profile/profile.module";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    TimelineModule,
    AdminModeModule,
    ProfileModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
