import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HttpClient} from '@angular/common/http/http';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/api.service';
import {MenuComponent} from './menu/menu.component';
import {LocalStorageModule} from 'angular-2-local-storage';
import {FgtComponent} from './fgt/fgt.component';
import {ResellerComponent} from './reseller/reseller.component';
import {AdminComponent} from './admin/admin.component';
import {ApplicationComponent} from './application/application.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {ApplicationPrComponent} from './application-pr/application-pr.component';
import {GameunitsAdComponent} from './gameunits-ad/gameunits-ad.component';
import {NgxPayPalModule} from 'ngx-paypal';
import {ResAdminComponent} from './res-admin/res-admin.component';
import {HistoryResellerComponent} from './history-reseller/history-reseller.component';
import {BuyResellerComponent} from './buy-reseller/buy-reseller.component';
import {PaymentsComponent} from './payments/payments.component';
import {PlayerComponent} from './player/player.component';
import {SuperAdminComponent} from './super-admin/super-admin.component';
import {ManagerComponent} from './manager/manager.component';
import {NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MenuComponent,
        FgtComponent,
        ResellerComponent,
        AdminComponent,
        ApplicationComponent,
        MyProfileComponent,
        ApplicationPrComponent,
        GameunitsAdComponent,
        ResAdminComponent,
        HistoryResellerComponent,
        BuyResellerComponent,
        PaymentsComponent,
        PlayerComponent,
        SuperAdminComponent,
        ManagerComponent
    ],
    imports: [
        BrowserModule,
        NgxPayPalModule,
        FormsModule,
        PdfViewerModule,
        ModalModule.forRoot(),
        LocalStorageModule.forRoot({
            prefix: 'hoo',
            storageType: 'localStorage'
        }),
        HttpClientModule,
        AppRoutingModule,
        NgbModule,
        NgbPaginationModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

/*
  imports: [BrowserModule, CommonModule, FormsModule, NgbModule],
  declarations: [NgbdTablePagination],
  exports: [NgbdTablePagination],
  bootstrap: [NgbdTablePagination]
 */
