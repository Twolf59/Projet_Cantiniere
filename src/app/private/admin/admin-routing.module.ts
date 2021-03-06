import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminWeekDishesComponent} from './admin-week-dishes/admin-week-dishes/admin-week-dishes.component';
import {AdminUserAccountComponent} from './admin-user-account/admin-user-account/admin-user-account.component';
import {AdminOrderSummaryComponent} from './admin-order-summary/admin-order-summary/admin-order-summary.component';
import {AdminCardEditComponent} from './admin-card-edit/admin-card-edit/admin-card-edit.component';
import {AdminMenuComponent} from './admin-menu/admin-menu/admin-menu.component';

const routes: Routes = [
  {
    path: 'config',
    component: AdminMenuComponent
  },
  {
    path: 'weekdishes',
    component: AdminWeekDishesComponent
  },
  {
    path: 'usersaccount',
    component: AdminUserAccountComponent
  },
  {
    path: 'orders',
    component: AdminOrderSummaryComponent
  },
  {
    path: 'card-edit',
    component: AdminCardEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
