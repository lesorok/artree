import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from "@angular/router";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { HeaderComponent } from "./componets/header/header.component";
import { FooterComponent } from "./componets/footer/footer.component";
import { SearchComponent } from './componets/search/search.component';
import { UserDropdownComponent } from './componets/user/profile/user-dropdown/user-dropdown.component';
import { NewPostPageComponent } from './componets/new-post/new-post-page/new-post-page.component';
import { NewPostModule } from "./componets/new-post/new-post-page/componets/new-post/new-post.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    UserDropdownComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    // RouterModule.forRoot([]),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    NewPostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
