import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from "./admin-page.component";
import { AdminNavComponent } from "./components/admin-nav/admin-nav.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import {AdminRoutingModule} from "../admin-routing.module";

@NgModule({
  declarations: [
    AdminPageComponent,
    AdminNavComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [],
})
export class AdminPageModule {}
