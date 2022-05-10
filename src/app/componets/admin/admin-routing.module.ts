import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [{
  path: '',
  component: AdminPageComponent,
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
 exports: [RouterModule]
})
export class AdminRoutingModule {}
