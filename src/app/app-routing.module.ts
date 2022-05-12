import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuestGuard } from "./guard/admin-guest.guard";

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   loadChildren: () =>
  //       import(
  //         './componets/categories/categories-routing.module'
  //       ).then((m) => m.CategoriesRoutingModule),
  // },
  // {
  //   path: '**',
  //   loadChildren: () =>
  //     import('./componets/not-found/not-found-routing.module').then(
  //       (m) => m.NotFoundRoutingModule
  //     ),
  // },

  {
    path: 'categories',
    loadChildren: () =>
      import(
        './componets/categories/categories-page/categories-page.module'
        ).then((m) => m.CategoriesPageModule),
  },
  {
    path: 'feed/newpost',
    loadChildren: () =>
      import(
        './componets/new-post/new-post-page/new-post-page.module'
        ).then((m) => m.NewPostPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./componets/user/login/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import(
        './componets/user/register/register-page/register-page.module'
      ).then((m) => m.RegisterPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./componets/user/profile/profile-page/profile-page.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'feed',
    loadChildren: () =>
      import('./componets/feed/feed-page/feed-page.module').then(
        (m) => m.FeedPageModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./componets/admin/admin-page/admin-page.module').then(
        (m) => m.AdminPageModule
      ),
  },
  {
    path: 'admin/auth',
    loadChildren: () =>
      import('./componets/admin/admin-auth/admin-auth.module').then(
        (m) => m.AdminPageModule
      ),
    canLoad: [AdminGuestGuard],
    canActivate: [AdminGuestGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
];
@NgModule({
  imports: [RouterModule.forRoot( routes)],
  exports: [RouterModule],
  providers: [AdminGuestGuard]
})
export class AppRoutingModule {}
