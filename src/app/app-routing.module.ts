import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  {path: 'timeline', loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule)},
  {path: 'admin-mode', loadChildren: () => import('./admin-mode/admin-mode.module').then(m => m.AdminModeModule)},
  {path: '', pathMatch: 'full', redirectTo: 'category'},
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
