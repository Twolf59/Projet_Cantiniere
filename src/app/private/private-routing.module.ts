import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagenotfoundComponent} from '../core/components/pagenotfound/pagenotfound.component';
import {UserAccountComponent} from './user/user-account/user-account.component';
import {OnAdminGuard} from '../core/guards/onadmin/on-admin.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [
      OnAdminGuard
    ]
  },
  {
    path: 'account',
    component: UserAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
