import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {HeaderComponent} from "./componets/header/header.component";
import {FooterComponent} from "./componets/footer/footer.component";
import {RegisterPageModule} from "./componets/user/register/register-page/register-page.module";
import {LoginPageModule} from "./componets/user/login/login-page/login-page.module";
import {FeedPageModule} from "./componets/feed/feed-page/feed-page.module";
import {AdminPageModule} from "./componets/admin/admin-page/admin-page.module";
import {ProfilePageModule} from "./componets/user/profile/profile-page/profile-page.module";
import {NotFoundRoutingModule} from "./componets/not-found/not-found-routing.module";

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
    LoginPageModule,
    RegisterPageModule,
    FeedPageModule,
    AdminPageModule,
    ProfilePageModule,
    NotFoundRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
