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
import { PlayerComponent } from './player/player.component';
import {SuperAdminComponent} from './super-admin/super-admin.component';
import {ManagerComponent} from './manager/manager.component';


const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'rs', component: ResellerComponent },
  { path: 'hr', component: HistoryResellerComponent },
  { path: 'pr', component: PlayerComponent },
  { path: 'byr/:id', component: BuyResellerComponent},
  { path: 'gm', component:   GameunitsAdComponent },
  { path: 'pf', component: MyProfileComponent },
  { path: 'rsad', component: ResAdminComponent },
  { path: 'ps', component: ApplicationPrComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ad', component: AdminComponent },
  { path: 'super-admin', component: SuperAdminComponent },
  { path: 'fgt', component: FgtComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'managers', component: ManagerComponent },
];
//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
