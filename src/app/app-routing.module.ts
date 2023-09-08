import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { OrdersComponent } from './orders/orders.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path:'',component:MainContentComponent
  },
  {
    path:'orders',component:OrdersComponent
  },
  {
    path:'staff',component:StaffComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
