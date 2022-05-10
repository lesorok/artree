import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'categories', loadChildren: () => import('./componets/categories/categories-page/categories-page.module').then(m => m.CategoriesPageModule) },
  {path: 'login', loadChildren: () => import("./componets/user/login/login-page/login-page.module").then(m => m.LoginPageModule)},
  {path: 'register', loadChildren: () => import('./componets/user/register/register-page/register-page.module').then(m => m.RegisterPageModule)},
  {path: 'profile', loadChildren: () => import('./componets/user/profile/profile-page/profile-page.module').then(m => m.ProfilePageModule)},
  {path: 'feed', loadChildren: () => import('./componets/feed/feed-page/feed-page.module').then(m => m.FeedPageModule)},
  {path: 'admin', loadChildren: () => import('./componets/admin/admin-page/admin-page.module').then(m => m.AdminPageModule)},
  {path: "**", loadChildren: () => import('./componets/not-found/not-found-routing.module').then(m => m.NotFoundRoutingModule)},
  {path: '', pathMatch: 'full', redirectTo: 'categories'},
]
@NgModule({

  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
