import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FgtComponent } from './fgt/fgt.component';
import { ResellerComponent } from './reseller/reseller.component';
import { AdminComponent } from './admin/admin.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ApplicationPrComponent } from './application-pr/application-pr.component';
import { GameunitsAdComponent } from './gameunits-ad/gameunits-ad.component';
import { ResAdminComponent } from './res-admin/res-admin.component';
import { HistoryResellerComponent } from './history-reseller/history-reseller.component';
import { BuyResellerComponent } from './buy-reseller/buy-reseller.component';
import {PaymentsComponent} from './payments/payments.component';


const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'rs', component: ResellerComponent },
  { path: 'hr', component: HistoryResellerComponent },
  { path: 'byr/:id', component: BuyResellerComponent},
  { path: 'gm', component:   GameunitsAdComponent },
  { path: 'pf', component: MyProfileComponent },
  { path: 'rsad', component: ResAdminComponent },
  { path: 'pr', component: ApplicationPrComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ad', component: AdminComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'fgt', component: FgtComponent },
  { path: 'payments', component: PaymentsComponent },
];
//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
