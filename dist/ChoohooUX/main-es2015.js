(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");






class AdminComponent {
    constructor(router, Api, localStorageService) {
        this.router = router;
        this.Api = Api;
        this.localStorageService = localStorageService;
    }
    ngOnInit() {
    }
    logout() {
        this.localStorageService.clearAll();
        this.router.navigate(['/login']);
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 3, vars: 0, consts: [[1, "container-fluid"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]], styles: ["@import 'https://fonts.googleapis.com/css?family=Raleway:300,400';\n\n\nbody[_ngcontent-%COMP%] {\n    font-family: 'Raleway:300', sans-serif\n}\n\n\n.admin-sidenav[_ngcontent-%COMP%] {\n    width: auto;\n\theight: auto;\n\tmargin-left: 0px; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\ttext-decoration: none; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\ttext-align: justify;\n\tpadding: .5rem;\n\tpadding-left: 1rem;\n\ttransition: all .2s linear;\n\tbackground-color: #000;\n\tborder: 1px solid #333; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n\tborder-radius: 0 .5rem .5rem 0;\n\tborder-color: #02d3f5;\n\ttransform: translate(30px, 0px);\n\tbackground: linear-gradient(to right, #006a7b, #002340); \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRUFBaUU7OztBQUdqRTtJQUNJO0FBQ0o7OztBQUVBO0lBQ0ksV0FBVztDQUNkLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7OztBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCOzs7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2Qsa0JBQWtCO0NBRWxCLDBCQUEwQjtDQUMxQixzQkFBc0I7Q0FDdEIsc0JBQXNCO0FBQ3ZCOzs7QUFDQTtDQUNDLFdBQVc7QUFDWjs7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7OztBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLHFCQUFxQjtDQUVyQiwrQkFBK0I7Q0FFL0IsdURBQXVEO0FBQ3hEOzs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTozMDAsNDAwJztcblxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXk6MzAwJywgc2Fucy1zZXJpZlxufVxuICAgIFxuLmFkbWluLXNpZGVuYXYge1xuICAgIHdpZHRoOiBhdXRvO1xuXHRoZWlnaHQ6IGF1dG87XG5cdG1hcmdpbi1sZWZ0OiAwcHg7IFxufVxuLmFkbWluLXNpZGVuYXYgYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXG59XG4uYWRtaW4tc2lkZW5hdiBsaSB7XG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XG5cdHBhZGRpbmc6IC41cmVtO1xuXHRwYWRkaW5nLWxlZnQ6IDFyZW07XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XG5cdHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzMzOyBcbn1cbi5hZG1pbi1zaWRlbmF2IGxpIGEge1xuXHRjb2xvcjogI2ZmZjsgXG59XG5cbi5hZG1pbi1zaWRlbmF2IGxpIGE6YWN0aXZlIHtcblx0Ym9yZGVyLWNvbG9yOiAjMDJkM2Y1OyBcbn1cblxuLmFkbWluLXNpZGVuYXYgbGk6aG92ZXIge1xuXHRib3JkZXItcmFkaXVzOiAwIC41cmVtIC41cmVtIDA7XG5cdGJvcmRlci1jb2xvcjogIzAyZDNmNTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDA2YTdiLCAjMDAyMzQwKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA2YTdiLCAjMDAyMzQwKTsgXG59XG5cbi5hZG1pbi1zaWRlbmF2IGxpOmFjdGl2ZSB7XG5cdGJvcmRlci1jb2xvcjogIzAyZDNmNTsgXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _fgt_fgt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fgt/fgt.component */ "./src/app/fgt/fgt.component.ts");
/* harmony import */ var _reseller_reseller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reseller/reseller.component */ "./src/app/reseller/reseller.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "./src/app/my-profile/my-profile.component.ts");
/* harmony import */ var _application_pr_application_pr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./application-pr/application-pr.component */ "./src/app/application-pr/application-pr.component.ts");
/* harmony import */ var _gameunits_ad_gameunits_ad_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gameunits-ad/gameunits-ad.component */ "./src/app/gameunits-ad/gameunits-ad.component.ts");
/* harmony import */ var _res_admin_res_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./res-admin/res-admin.component */ "./src/app/res-admin/res-admin.component.ts");
/* harmony import */ var _history_reseller_history_reseller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history-reseller/history-reseller.component */ "./src/app/history-reseller/history-reseller.component.ts");
/* harmony import */ var _buy_reseller_buy_reseller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./buy-reseller/buy-reseller.component */ "./src/app/buy-reseller/buy-reseller.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/payments/payments.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./super-admin/super-admin.component */ "./src/app/super-admin/super-admin.component.ts");
/* harmony import */ var _manager_manager_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./manager/manager.component */ "./src/app/manager/manager.component.ts");


















const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'rs', component: _reseller_reseller_component__WEBPACK_IMPORTED_MODULE_4__["ResellerComponent"] },
    { path: 'hr', component: _history_reseller_history_reseller_component__WEBPACK_IMPORTED_MODULE_10__["HistoryResellerComponent"] },
    { path: 'pr', component: _player_player_component__WEBPACK_IMPORTED_MODULE_13__["PlayerComponent"] },
    { path: 'byr/:id', component: _buy_reseller_buy_reseller_component__WEBPACK_IMPORTED_MODULE_11__["BuyResellerComponent"] },
    { path: 'gm', component: _gameunits_ad_gameunits_ad_component__WEBPACK_IMPORTED_MODULE_8__["GameunitsAdComponent"] },
    { path: 'pf', component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__["MyProfileComponent"] },
    { path: 'rsad', component: _res_admin_res_admin_component__WEBPACK_IMPORTED_MODULE_9__["ResAdminComponent"] },
    { path: 'ps', component: _application_pr_application_pr_component__WEBPACK_IMPORTED_MODULE_7__["ApplicationPrComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'ad', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
    { path: 'super-admin', component: _super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_14__["SuperAdminComponent"] },
    { path: 'fgt', component: _fgt_fgt_component__WEBPACK_IMPORTED_MODULE_3__["FgtComponent"] },
    { path: 'payments', component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_12__["PaymentsComponent"] },
    { path: 'managers', component: _manager_manager_component__WEBPACK_IMPORTED_MODULE_15__["ManagerComponent"] },
];
//
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");





class AppComponent {
    constructor(router, Api, localStorageService) {
        this.router = router;
        this.Api = Api;
        this.localStorageService = localStorageService;
        this.title = 'ChoohooUX';
        this.role = "";
        this.state = "";
        this.showbtn = false;
        this.showAdmin = false;
        this.showmenu = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.getRole();
    }
    getRole() {
        this.role = this.localStorageService.get('AdminStatus');
        if (this.role == "SuperAdmin") {
            this.showAdmin = true;
            this.showmenu = true;
            console.log(this.role);
        }
        if (this.role == "AdminManager") {
            this.showAdmin = true;
            this.showmenu = true;
        }
        if (this.role == "0") {
            this.showAdmin = false;
        }
    }
    logout() {
        this.localStorageService.clearAll();
        this.router.navigate(['/login']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@import 'https://fonts.googleapis.com/css?family=Raleway:300,400';\n\n\nbody[_ngcontent-%COMP%] {\n    font-family: 'Raleway:300', sans-serif\n}\n\n\n.admin-sidenav[_ngcontent-%COMP%] {\n    width: auto;\n\theight: auto;\n\tmargin-left: 0px; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\ttext-decoration: none; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\ttext-align: justify;\n\tpadding: .5rem;\n\tpadding-left: 1rem;\n\ttransition: all .2s linear;\n\tbackground-color: #000;\n\tborder: 1px solid #333; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n\tborder-radius: 0 .5rem .5rem 0;\n\tborder-color: #02d3f5;\n\ttransform: translate(30px, 0px);\n\tbackground: linear-gradient(to right, #006a7b, #002340); \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUVBQWlFOzs7QUFHakU7SUFDSTtBQUNKOzs7QUFFQTtJQUNJLFdBQVc7Q0FDZCxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOzs7QUFDQTtDQUNDLHFCQUFxQjtBQUN0Qjs7O0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGtCQUFrQjtDQUVsQiwwQkFBMEI7Q0FDMUIsc0JBQXNCO0NBQ3RCLHNCQUFzQjtBQUN2Qjs7O0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7OztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOzs7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QixxQkFBcUI7Q0FFckIsK0JBQStCO0NBRS9CLHVEQUF1RDtBQUN4RDs7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjMwMCw0MDAnO1xuXG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheTozMDAnLCBzYW5zLXNlcmlmXG59XG4gICAgXG4uYWRtaW4tc2lkZW5hdiB7XG4gICAgd2lkdGg6IGF1dG87XG5cdGhlaWdodDogYXV0bztcblx0bWFyZ2luLWxlZnQ6IDBweDsgXG59XG4uYWRtaW4tc2lkZW5hdiBhIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lOyBcbn1cbi5hZG1pbi1zaWRlbmF2IGxpIHtcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcblx0cGFkZGluZzogLjVyZW07XG5cdHBhZGRpbmctbGVmdDogMXJlbTtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcblx0dHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMzM7IFxufVxuLmFkbWluLXNpZGVuYXYgbGkgYSB7XG5cdGNvbG9yOiAjZmZmOyBcbn1cblxuLmFkbWluLXNpZGVuYXYgbGkgYTphY3RpdmUge1xuXHRib3JkZXItY29sb3I6ICMwMmQzZjU7IFxufVxuXG4uYWRtaW4tc2lkZW5hdiBsaTpob3ZlciB7XG5cdGJvcmRlci1yYWRpdXM6IDAgLjVyZW0gLjVyZW0gMDtcblx0Ym9yZGVyLWNvbG9yOiAjMDJkM2Y1O1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMwMDZhN2IsICMwMDIzNDApO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDZhN2IsICMwMDIzNDApOyBcbn1cblxuLmFkbWluLXNpZGVuYXYgbGk6YWN0aXZlIHtcblx0Ym9yZGVyLWNvbG9yOiAjMDJkM2Y1OyBcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
/* harmony import */ var _fgt_fgt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fgt/fgt.component */ "./src/app/fgt/fgt.component.ts");
/* harmony import */ var _reseller_reseller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reseller/reseller.component */ "./src/app/reseller/reseller.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _application_application_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./application/application.component */ "./src/app/application/application.component.ts");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "./src/app/my-profile/my-profile.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _application_pr_application_pr_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./application-pr/application-pr.component */ "./src/app/application-pr/application-pr.component.ts");
/* harmony import */ var _gameunits_ad_gameunits_ad_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gameunits-ad/gameunits-ad.component */ "./src/app/gameunits-ad/gameunits-ad.component.ts");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/__ivy_ngcc__/fesm2015/ngx-paypal.js");
/* harmony import */ var _res_admin_res_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./res-admin/res-admin.component */ "./src/app/res-admin/res-admin.component.ts");
/* harmony import */ var _history_reseller_history_reseller_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./history-reseller/history-reseller.component */ "./src/app/history-reseller/history-reseller.component.ts");
/* harmony import */ var _buy_reseller_buy_reseller_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./buy-reseller/buy-reseller.component */ "./src/app/buy-reseller/buy-reseller.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/payments/payments.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./super-admin/super-admin.component */ "./src/app/super-admin/super-admin.component.ts");
/* harmony import */ var _manager_manager_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./manager/manager.component */ "./src/app/manager/manager.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ngx_paypal__WEBPACK_IMPORTED_MODULE_18__["NgxPayPalModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__["PdfViewerModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_27__["ModalModule"].forRoot(),
            angular_2_local_storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorageModule"].forRoot({
                prefix: 'hoo',
                storageType: 'localStorage'
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbPaginationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
        _fgt_fgt_component__WEBPACK_IMPORTED_MODULE_10__["FgtComponent"],
        _reseller_reseller_component__WEBPACK_IMPORTED_MODULE_11__["ResellerComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
        _application_application_component__WEBPACK_IMPORTED_MODULE_13__["ApplicationComponent"],
        _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_14__["MyProfileComponent"],
        _application_pr_application_pr_component__WEBPACK_IMPORTED_MODULE_16__["ApplicationPrComponent"],
        _gameunits_ad_gameunits_ad_component__WEBPACK_IMPORTED_MODULE_17__["GameunitsAdComponent"],
        _res_admin_res_admin_component__WEBPACK_IMPORTED_MODULE_19__["ResAdminComponent"],
        _history_reseller_history_reseller_component__WEBPACK_IMPORTED_MODULE_20__["HistoryResellerComponent"],
        _buy_reseller_buy_reseller_component__WEBPACK_IMPORTED_MODULE_21__["BuyResellerComponent"],
        _payments_payments_component__WEBPACK_IMPORTED_MODULE_22__["PaymentsComponent"],
        _player_player_component__WEBPACK_IMPORTED_MODULE_23__["PlayerComponent"],
        _super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_24__["SuperAdminComponent"],
        _manager_manager_component__WEBPACK_IMPORTED_MODULE_25__["ManagerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ngx_paypal__WEBPACK_IMPORTED_MODULE_18__["NgxPayPalModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__["PdfViewerModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_27__["ModalModule"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbPaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                    _fgt_fgt_component__WEBPACK_IMPORTED_MODULE_10__["FgtComponent"],
                    _reseller_reseller_component__WEBPACK_IMPORTED_MODULE_11__["ResellerComponent"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
                    _application_application_component__WEBPACK_IMPORTED_MODULE_13__["ApplicationComponent"],
                    _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_14__["MyProfileComponent"],
                    _application_pr_application_pr_component__WEBPACK_IMPORTED_MODULE_16__["ApplicationPrComponent"],
                    _gameunits_ad_gameunits_ad_component__WEBPACK_IMPORTED_MODULE_17__["GameunitsAdComponent"],
                    _res_admin_res_admin_component__WEBPACK_IMPORTED_MODULE_19__["ResAdminComponent"],
                    _history_reseller_history_reseller_component__WEBPACK_IMPORTED_MODULE_20__["HistoryResellerComponent"],
                    _buy_reseller_buy_reseller_component__WEBPACK_IMPORTED_MODULE_21__["BuyResellerComponent"],
                    _payments_payments_component__WEBPACK_IMPORTED_MODULE_22__["PaymentsComponent"],
                    _player_player_component__WEBPACK_IMPORTED_MODULE_23__["PlayerComponent"],
                    _super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_24__["SuperAdminComponent"],
                    _manager_manager_component__WEBPACK_IMPORTED_MODULE_25__["ManagerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ngx_paypal__WEBPACK_IMPORTED_MODULE_18__["NgxPayPalModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__["PdfViewerModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_27__["ModalModule"].forRoot(),
                    angular_2_local_storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorageModule"].forRoot({
                        prefix: 'hoo',
                        storageType: 'localStorage'
                    }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbPaginationModule"]
                ],
                providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/application-pr/application-pr.component.ts":
/*!************************************************************!*\
  !*** ./src/app/application-pr/application-pr.component.ts ***!
  \************************************************************/
/*! exports provided: ApplicationPrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationPrComponent", function() { return ApplicationPrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");








function ApplicationPrComponent_tr_75_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationPrComponent_tr_75_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.view(item_r1.Document); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationPrComponent_tr_75_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addAction(item_r1.Email, "ap"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.ResellerID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.ApplicationStatus);
} }
class ApplicationPrComponent {
    constructor(router, Api, localStorageService) {
        this.router = router;
        this.Api = Api;
        this.localStorageService = localStorageService;
        this.errorMessage = "";
        this.username = "";
        this.showdf = false;
        this.pdfSrc = '';
        this.details = { ResellerID: '', Name: '', AdminStatus: '', Type: "" };
    }
    logout() {
        this.localStorageService.clearAll();
        this.router.navigate(['/login']);
    }
    ngOnInit() {
        this.getME();
    }
    getME() {
        this.Api.getResllers().subscribe(response => {
            if (response) {
                this.ItemsArray = response.users;
            }
        }, error => {
            if (error.status == "401") {
                this.errorMessage = "Incorrect Verification Code";
            }
            if (error.status == "0") {
                this.errorMessage = "Service Unavaliable";
            }
        });
    }
    addAction(email, code) {
        if (code === "ap") {
            code = 'Approved';
            console.log(email);
            this.addA(email, code);
        }
        if (code === "rj") {
            code = 'Rejected';
            this.addA(email, code);
        }
    }
    view(email) {
        console.log(email);
        this.pdfSrc = email;
        this.showdf = true;
    }
    addA(email, action) {
        console.log(action);
        if (action == '') {
        }
        else {
            this.errorMessage = "";
            this.errorMessage = "";
            this.Api.updateResellerStatus(email, action).subscribe(response => {
                if (response) {
                    if (response.message == "Account deteled") {
                        this.errorMessage = "Account Deleted";
                        //  this.showtable = false;
                    }
                    if (response.message == "Account updated") {
                        this.ItemsArray = "";
                        this.getME();
                    }
                }
            }, error => {
                if (error.status == "401") {
                    this.errorMessage = "Incorrect Verification Code";
                }
                if (error.status == "0") {
                    this.errorMessage = "Service Unavaliable";
                }
            });
        }
    }
}
ApplicationPrComponent.ɵfac = function ApplicationPrComponent_Factory(t) { return new (t || ApplicationPrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"])); };
ApplicationPrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationPrComponent, selectors: [["app-application-pr"]], decls: 77, vars: 3, consts: [[1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "container-fluid"], [1, "row"], ["id", "admin-sidebar", 1, "col-md-2", "p-x-0", "p-y-3"], [1, "sidenav", "admin-sidenav", "list-unstyled"], ["routerLink", "/menu", "routerLinkActive", "active"], ["routerLink", "/ps"], ["routerLink", "/gm"], [3, "click"], ["href", "#"], ["id", "admin-main-control", 1, "col-md-10", "p-x-3", "p-y-1"], [1, "container"], [1, "span5"], [1, "table", "table-striped", "table-condensed"], [4, "ngFor", "ngForOf"], [2, "display", "block", 3, "src", "render-text"], [1, "btn-group", "show-on-hover"], ["type", "button", "data-toggle", "dropdown", 1, "btn", "btn-default", "dropdown-toggle"], [1, "caret"], ["role", "menu", 1, "dropdown-menu"], ["value", "Super Admin", 3, "click"], ["value", "Admin Manage", 3, "click"]], template: function ApplicationPrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CHOOHOO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Game Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationPrComponent_Template_li_click_18_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "LOGOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "ResellerID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ApplicationPrComponent_tr_75_Template, 20, 4, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "pdf-viewer", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ItemsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("render-text", true);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfViewerComponent"]], styles: ["@import 'https://fonts.googleapis.com/css?family=Raleway:300,400';\n\n\nbody[_ngcontent-%COMP%] {\n    font-family: 'Raleway:300', sans-serif\n}\n\n\n.admin-sidenav[_ngcontent-%COMP%] {\n    width: auto;\n\theight: auto;\n\tmargin-left: 0px; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\ttext-decoration: none; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\ttext-align: justify;\n\tpadding: .5rem;\n\tpadding-left: 1rem;\n\ttransition: all .2s linear;\n\tbackground-color: #000;\n\tborder: 1px solid #333; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n\tborder-radius: 0 .5rem .5rem 0;\n\tborder-color: #02d3f5;\n\ttransform: translate(30px, 0px);\n\tbackground: linear-gradient(to right, #006a7b, #002340); \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24tcHIvYXBwbGljYXRpb24tcHIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRUFBaUU7OztBQUdqRTtJQUNJO0FBQ0o7OztBQUVBO0lBQ0ksV0FBVztDQUNkLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7OztBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCOzs7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2Qsa0JBQWtCO0NBRWxCLDBCQUEwQjtDQUMxQixzQkFBc0I7Q0FDdEIsc0JBQXNCO0FBQ3ZCOzs7QUFDQTtDQUNDLFdBQVc7QUFDWjs7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7OztBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLHFCQUFxQjtDQUVyQiwrQkFBK0I7Q0FFL0IsdURBQXVEO0FBQ3hEOzs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uLXByL2FwcGxpY2F0aW9uLXByLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTozMDAsNDAwJztcblxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXk6MzAwJywgc2Fucy1zZXJpZlxufVxuICAgIFxuLmFkbWluLXNpZGVuYXYge1xuICAgIHdpZHRoOiBhdXRvO1xuXHRoZWlnaHQ6IGF1dG87XG5cdG1hcmdpbi1sZWZ0OiAwcHg7IFxufVxuLmFkbWluLXNpZGVuYXYgYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXG59XG4uYWRtaW4tc2lkZW5hdiBsaSB7XG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XG5cdHBhZGRpbmc6IC41cmVtO1xuXHRwYWRkaW5nLWxlZnQ6IDFyZW07XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XG5cdHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzMzOyBcbn1cbi5hZG1pbi1zaWRlbmF2IGxpIGEge1xuXHRjb2xvcjogI2ZmZjsgXG59XG5cbi5hZG1pbi1zaWRlbmF2IGxpIGE6YWN0aXZlIHtcblx0Ym9yZGVyLWNvbG9yOiAjMDJkM2Y1OyBcbn1cblxuLmFkbWluLXNpZGVuYXYgbGk6aG92ZXIge1xuXHRib3JkZXItcmFkaXVzOiAwIC41cmVtIC41cmVtIDA7XG5cdGJvcmRlci1jb2xvcjogIzAyZDNmNTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDA2YTdiLCAjMDAyMzQwKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA2YTdiLCAjMDAyMzQwKTsgXG59XG5cbi5hZG1pbi1zaWRlbmF2IGxpOmFjdGl2ZSB7XG5cdGJvcmRlci1jb2xvcjogIzAyZDNmNTsgXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationPrComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application-pr',
                templateUrl: './application-pr.component.html',
                styleUrls: ['./application-pr.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/application/application.component.ts":
/*!******************************************************!*\
  !*** ./src/app/application/application.component.ts ***!
  \******************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function ApplicationComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
function ApplicationComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ChoohooID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Surname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationComponent_div_78_Template_a_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addAction("Super Admin"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Super Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationComponent_div_78_Template_a_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addAction("Admin Manager"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Admin Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationComponent_div_78_Template_a_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.addAction("Delete"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationComponent_div_78_Template_a_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addAction("Ban"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.details.ChoohooID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.details.Surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.details.AdminStatus);
} }
class ApplicationComponent {
    constructor(Api) {
        this.Api = Api;
        this.mylogin = { username: '', stationID: '', password: '' };
        this.details = { ChoohooID: '', Surname: '', AdminStatus: '' };
        this.errorMessage = '';
        this.showtable = false;
    }
    ngOnInit() {
    }
    search() {
        this.showtable = false;
        if (this.mylogin.username == '') {
        }
        else {
            this.errorMessage = "";
            this.errorMessage = "";
            this.Api.search(this.mylogin.username).subscribe(response => {
                if (response) {
                    if (response.user) {
                        this.details.ChoohooID = response.user.ChoohooID;
                        this.details.Surname = response.user.Surname;
                        this.details.AdminStatus = response.user.AdminStatus;
                        if (this.details.AdminStatus == "0") {
                            this.details.AdminStatus = "player";
                        }
                        this.showtable = true;
                        // this.showlogin = true;
                        // this.showpwd =false;
                    }
                    if (response.message == "notfound") {
                        this.errorMessage = "User not Found";
                        // this.showlogin = true;
                        // this.showpwd =false;
                    }
                }
            }, error => {
                if (error.status == "401") {
                    this.errorMessage = "Incorrect Verification Code";
                }
                if (error.status == "0") {
                    this.errorMessage = "Service Unavaliable";
                }
            });
        }
    }
    addAction(action) {
        this.showtable = false;
        console.log(action);
        if (action == '') {
        }
        else {
            this.errorMessage = "";
            this.errorMessage = "";
            this.Api.add(this.mylogin.username, action).subscribe(response => {
                if (response) {
                    if (response.message == "Account deteled") {
                        this.errorMessage = "Account Deleted";
                        this.showtable = false;
                    }
                    if (response.message == "Account updated") {
                        this.errorMessage = "Account updated";
                        this.Api.search(this.mylogin.username).subscribe(response => {
                            if (response) {
                                if (response.user) {
                                    this.details.ChoohooID = response.user.ChoohooID;
                                    this.details.Surname = response.user.Surname;
                                    this.details.AdminStatus = response.user.AdminStatus;
                                    if (this.details.AdminStatus == "0") {
                                        this.details.AdminStatus = "player";
                                    }
                                    this.showtable = true;
                                    // this.showlogin = true;
                                    // this.showpwd =false;
                                }
                                if (response.message == "notfound") {
                                    this.errorMessage = "User not Found";
                                    // this.showlogin = true;
                                    // this.showpwd =false;
                                }
                            }
                        }, error => {
                            if (error.status == "0") {
                                this.errorMessage = "Service Unavaliable";
                            }
                        });
                    }
                }
            }, error => {
                if (error.status == "401") {
                    this.errorMessage = "Incorrect Verification Code";
                }
                if (error.status == "0") {
                    this.errorMessage = "Service Unavaliable";
                }
            });
        }
    }
}
ApplicationComponent.ɵfac = function ApplicationComponent_Factory(t) { return new (t || ApplicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
ApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationComponent, selectors: [["app-application"]], decls: 79, vars: 3, consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["id", "throbber", 2, "display", "none", "min-height", "120px"], ["id", "noty-holder"], ["id", "wrapper"], ["role", "navigation", 1, "navbar", "navbar-inverse", "navbar-fixed-top"], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-ex1-collapse", 1, "navbar-toggle"], [1, "sr-only"], [1, "icon-bar"], ["href", "https://bryanrojasq.wordpress.com", 1, "navbar-brand"], ["src", "assets/log.jpg", "alt", "LOGO", 2, "height", "10px"], [1, "nav", "navbar-right", "top-nav"], ["href", "#", "data-placement", "bottom", "data-toggle", "tooltip", "href", "#", "data-original-title", "Stats"], [1, "fa", "fa-bar-chart-o"], [1, "dropdown"], ["href", "#", "data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "fa", "fa-angle-down"], [1, "dropdown-menu"], ["href", "#"], [1, "fa", "fa-fw", "fa-user"], [1, "fa", "fa-fw", "fa-cog"], [1, "divider"], [1, "fa", "fa-fw", "fa-power-off"], [1, "collapse", "navbar-collapse", "navbar-ex1-collapse"], [1, "nav", "navbar-nav", "side-nav"], ["href", "#", "data-toggle", "collapse", "data-target", "#submenu-1"], [1, "fa", "fa-fw", "fa-search"], [1, "fa", "fa-fw", "fa-angle-down", "pull-right"], ["href", "#", "data-toggle", "collapse", "data-target", "#submenu-2", "routerLink", "/rs", "routerLinkActive", "active"], ["href", "investigaciones/favoritas"], [1, "fa", "fa-fw", "fa-user-plus"], ["href", "sugerencias"], [1, "fa", "fa-fw", "fa-paper-plane-o"], ["href", "faq"], [1, "fa", "fa-fw", "fa", "fa-question-circle"], ["id", "page-wrapper"], [1, "container-fluid"], ["id", "main", 1, "row"], ["id", "content", 1, "col-sm-12", "col-md-12", "well"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "container"], [1, "row"], [1, "col-md-6", "col-md-offset-3"], [1, "col-md-4", "col-md-offset-3"], ["action", "", 1, "search-form"], [1, "form-group", "has-feedback"], ["for", "search", 1, "sr-only"], ["type", "text", "name", "search", "id", "search", "placeholder", "search", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "glyphicon", "glyphicon-search", "form-control-feedback"], ["type", "submit", "s", "", 1, "btn", "btn-dark", 3, "click"], ["class", "container", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], [1, "span5"], [1, "table", "table-striped", "table-condensed"], [1, "label", "label-success"], [1, "btn-group", "show-on-hover"], ["type", "button", "data-toggle", "dropdown", 1, "btn", "btn-default", "dropdown-toggle"], [1, "caret"], ["role", "menu", 1, "dropdown-menu"], ["value", "Super Admin", 3, "click"], ["value", "Admin Manage", 3, "click"]], template: function ApplicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Toggle navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Admin User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "b", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " ADMIN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Reseller ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " MENU 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " MENU 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " MENU 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ApplicationComponent_div_62_Template, 2, 1, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Search User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "form", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicationComponent_Template_input_ngModelChange_74_listener($event) { return ctx.mylogin.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationComponent_Template_button_click_76_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ApplicationComponent_div_78_Template, 44, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mylogin.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showtable);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\n@media(min-width:768px) {\n    body[_ngcontent-%COMP%] {\n        margin-top: 50px;\n    }\n    \n}\n#wrapper[_ngcontent-%COMP%] {\n    padding-left: 0;    \n}\n#page-wrapper[_ngcontent-%COMP%] {\n    width: 100%;        \n    padding: 0;\n    background-color: #fff;\n}\n@media(min-width:768px) {\n    #wrapper[_ngcontent-%COMP%] {\n        padding-left: 225px;\n    }\n\n    #page-wrapper[_ngcontent-%COMP%] {\n        padding: 22px 10px;\n    }\n}\n\n.top-nav[_ngcontent-%COMP%] {\n    padding: 0 15px;\n}\n.top-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n    display: inline-block;\n    float: left;\n}\n.top-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    line-height: 20px;\n    color: #fff;\n}\n.top-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .top-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .top-nav[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .top-nav[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .top-nav[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus {\n    color: #fff;\n    background-color: #1a242f;\n}\n.top-nav[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] > .dropdown-menu[_ngcontent-%COMP%] {\n    float: left;\n    position: absolute;\n    margin-top: 0;\n    \n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    background-color: #fff;\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\n}\n.top-nav[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] > .dropdown-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n    white-space: normal;\n}\n\n@media(min-width:768px) {\n    .side-nav[_ngcontent-%COMP%] {\n        position: fixed;\n        top: 60px;\n        left: 225px;\n        width: 225px;\n        margin-left: -225px;\n        border: none;\n        border-radius: 0;\n        border-top: 1px rgba(0,0,0,.5) solid;\n        overflow-y: auto;\n        background-color: #222;\n        \n        bottom: 0;\n        overflow-x: hidden;\n        padding-bottom: 40px;\n    }\n\n    .side-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n        width: 225px;\n        border-bottom: 1px rgba(0,0,0,.3) solid;\n    }\n\n    .side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n        outline: none;\n        background-color: #1a242f !important;\n    }\n}\n.side-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] {\n    padding: 0;\n    border-bottom: 1px rgba(0,0,0,.3) solid;\n}\n.side-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n    display: block;\n    padding: 10px 15px 10px 38px;\n    text-decoration: none;\n    \n    color: #fff;    \n}\n.side-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\n    color: #fff;\n}\n.navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .label[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  position: absolute;\n  top: 14px;\n  right: 6px;\n  font-size: 10px;\n  font-weight: normal;\n  min-width: 15px;\n  min-height: 15px;\n  line-height: 1.0em;\n  text-align: center;\n  padding: 2px;\n}\n.navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover    > .label[_ngcontent-%COMP%] {\n  top: 10px;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n    padding: 5px 15px;\n}\n#custom-search-input[_ngcontent-%COMP%] {\n    margin:0;\n    margin-top: 10px;\n    padding: 0;\n}\n#custom-search-input[_ngcontent-%COMP%]   .search-query[_ngcontent-%COMP%] {\n    padding-right: 3px;\n    padding-right: 4px \\9;\n    padding-left: 3px;\n    padding-left: 4px \\9;\n    \n\n    margin-bottom: 0;\n    border-radius: 3px;\n}\n#custom-search-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border: 0;\n    background: none;\n    \n    padding: 2px 5px;\n    margin-top: 2px;\n    position: relative;\n    left: -28px;\n    \n    margin-bottom: 0;\n    border-radius: 3px;\n    color:#D9230F;\n}\n.search-query[_ngcontent-%COMP%]:focus    + button[_ngcontent-%COMP%] {\n    z-index: 3;   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vYXBwbGljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBLHdFQUF3RTtBQUM1RTtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7QUFFQSxtQkFBbUI7QUFFbkI7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFFQTs7Ozs7SUFLSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFFdEIsdUNBQXVDO0FBQzNDO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQSxvQkFBb0I7QUFFcEI7SUFDSTtRQUNJLGVBQWU7UUFDZixTQUFTO1FBQ1QsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixvQ0FBb0M7UUFDcEMsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsU0FBUztRQUNULGtCQUFrQjtRQUNsQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osdUNBQXVDO0lBQzNDOztJQUVBOztRQUVJLGFBQWE7UUFDYixvQ0FBb0M7SUFDeEM7QUFDSjtBQUVBO0lBQ0ksVUFBVTtJQUNWLHVDQUF1QztBQUMzQztBQUVBO0lBQ0ksY0FBYztJQUNkLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7RUFHRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUdBO0lBQ0ksUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrRUFBa0U7O0lBRWxFLGdCQUFnQjtJQUdoQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrRUFBa0U7SUFDbEUsZ0JBQWdCO0lBR2hCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xuQG1lZGlhKG1pbi13aWR0aDo3NjhweCkge1xuICAgIGJvZHkge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbiAgICAvKmh0bWwsIGJvZHksICN3cmFwcGVyLCAjcGFnZS13cmFwcGVyIHtoZWlnaHQ6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47fSovXG59XG5cbiN3cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7ICAgIFxufVxuXG4jcGFnZS13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTsgICAgICAgIFxuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhKG1pbi13aWR0aDo3NjhweCkge1xuICAgICN3cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMjVweDtcbiAgICB9XG5cbiAgICAjcGFnZS13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogMjJweCAxMHB4O1xuICAgIH1cbn1cblxuLyogVG9wIE5hdmlnYXRpb24gKi9cblxuLnRvcC1uYXYge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLnRvcC1uYXY+bGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLnRvcC1uYXY+bGk+YSB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi50b3AtbmF2PmxpPmE6aG92ZXIsXG4udG9wLW5hdj5saT5hOmZvY3VzLFxuLnRvcC1uYXY+Lm9wZW4+YSxcbi50b3AtbmF2Pi5vcGVuPmE6aG92ZXIsXG4udG9wLW5hdj4ub3Blbj5hOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEyNDJmO1xufVxuXG4udG9wLW5hdj4ub3Blbj4uZHJvcGRvd24tbWVudSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7Ki9cbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xufVxuXG4udG9wLW5hdj4ub3Blbj4uZHJvcGRvd24tbWVudT5saT5hIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4vKiBTaWRlIE5hdmlnYXRpb24gKi9cblxuQG1lZGlhKG1pbi13aWR0aDo3NjhweCkge1xuICAgIC5zaWRlLW5hdiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICBsZWZ0OiAyMjVweDtcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTIyNXB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCByZ2JhKDAsMCwwLC41KSBzb2xpZDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNUE2QjdEOyovXG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICB9XG5cbiAgICAuc2lkZS1uYXY+bGk+YSB7XG4gICAgICAgIHdpZHRoOiAyMjVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwwLDAsLjMpIHNvbGlkO1xuICAgIH1cblxuICAgIC5zaWRlLW5hdiBsaSBhOmhvdmVyLFxuICAgIC5zaWRlLW5hdiBsaSBhOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjQyZiAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnNpZGUtbmF2PmxpPnVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsMCwwLC4zKSBzb2xpZDtcbn1cblxuLnNpZGUtbmF2PmxpPnVsPmxpPmEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDM4cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIC8qY29sb3I6ICM5OTk7Ki9cbiAgICBjb2xvcjogI2ZmZjsgICAgXG59XG5cbi5zaWRlLW5hdj5saT51bD5saT5hOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhciAubmF2ID4gbGkgPiBhID4gLmxhYmVsIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNHB4O1xuICByaWdodDogNnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1pbi13aWR0aDogMTVweDtcbiAgbWluLWhlaWdodDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDEuMGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLm5hdmJhciAubmF2ID4gbGkgPiBhOmhvdmVyID4gLmxhYmVsIHtcbiAgdG9wOiAxMHB4O1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbn1cblxuXG4jY3VzdG9tLXNlYXJjaC1pbnB1dCB7XG4gICAgbWFyZ2luOjA7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4jY3VzdG9tLXNlYXJjaC1pbnB1dCAuc2VhcmNoLXF1ZXJ5IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogNHB4IFxcOTtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweCBcXDk7XG4gICAgLyogSUU3LTggZG9lc24ndCBoYXZlIGJvcmRlci1yYWRpdXMsIHNvIGRvbid0IGluZGVudCB0aGUgcGFkZGluZyAqL1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbiNjdXN0b20tc2VhcmNoLWlucHV0IGJ1dHRvbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgLyoqIGJlbG93cyBzdHlsZXMgYXJlIHdvcmtpbmcgZ29vZCAqL1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMjhweDtcbiAgICAvKiBJRTctOCBkb2Vzbid0IGhhdmUgYm9yZGVyLXJhZGl1cywgc28gZG9uJ3QgaW5kZW50IHRoZSBwYWRkaW5nICovXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgY29sb3I6I0Q5MjMwRjtcbn1cblxuLnNlYXJjaC1xdWVyeTpmb2N1cyArIGJ1dHRvbiB7XG4gICAgei1pbmRleDogMzsgICBcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application',
                templateUrl: './application.component.html',
                styleUrls: ['./application.component.css']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/buy-reseller/buy-reseller.component.ts":
/*!********************************************************!*\
  !*** ./src/app/buy-reseller/buy-reseller.component.ts ***!
  \********************************************************/
/*! exports provided: BuyResellerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyResellerComponent", function() { return BuyResellerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function BuyResellerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, "");
} }
function BuyResellerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BUY GAME UNITS FOR RESELLER CASH SALES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " R50.00 | 50 Units per batch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyResellerComponent_div_3_Template_span_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.DecreaseUnitPurchase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyResellerComponent_div_3_Template_span_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.IncreaseUnitPurchase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyResellerComponent_div_3_Template_img_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.gotoReview(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reseller : ", ctx_r1.details.Name, " MAPONGA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sales Channel ID : ", ctx_r1.details.ResellerID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("City Country : ", ctx_r1.details.City, " ", ctx_r1.details.Country, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.UnitPurchase);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 6, ctx_r1.UnitPurchaseTotal, "R"), "");
} }
function BuyResellerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BUY GAME UNITS FOR RESELLER CASH SALES | Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "if something appears to be missing or incorrect,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "please contact CUSTOMER SUPPORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " R50.00 | 50 Units per batch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Game Units Number: GUWAGenerated6digitNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Units");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "50 Units");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Vat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "PAYMENT METHODS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Select Payment Methods:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "PayPal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Bitcoin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Masterpass");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "MasterCard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Scode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "**** **** **** 1234");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyResellerComponent_div_4_Template_img_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.gotoPayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 7, ctx_r2.DateTimeNow, "fullDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.UnitPurchase);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 10, ctx_r2.UnitPurchaseTotal, "R"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](41, 13, 50, "R"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](47, 16, ctx_r2.VatAmount, "R"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](53, 19, ctx_r2.TotalAmount, "R"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.PaymentMethod);
} }
class BuyResellerComponent {
    constructor(route, Api) {
        this.route = route;
        this.Api = Api;
        this.details = { ResellerID: '', Name: '', AdminStatus: '', Type: "", units: "", Country: '', City: '', Email: '', Cellphone: '' };
        this.UnitPurchase = 0.00;
        this.UnitPurchaseTotal = this.UnitPurchase * 50;
        this.showBuycredits = true;
        this.DateTimeNow = new Date();
        this.VatAmount = 150;
        this.TotalAmount = this.UnitPurchaseTotal = this.UnitPurchase * 50;
        this.PaymentMethod = '';
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            // console.log(this.id)  ;
            this.route.params.subscribe(params => this.id = params.id);
            console.log(params.id);
            // In a real app: dispatch action to load the details here.
        });
        if (this.id == "") {
        }
        else {
            this.getReseller();
        }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getReseller() {
        this.errorMessage = "";
        this.Api.findReseller(this.id).subscribe(response => {
            if (response.message == "notfound") {
                this.errorMessage = " No Reseller Profile";
            }
            if (response) {
                this.details.ResellerID = response.person.ResellerID;
                this.details.Name = response.person.Name;
                this.details.AdminStatus = response.person.ApplicationStatus;
                this.details.units = response.person.units;
                this.details.Country = response.person.Country;
                this.details.City = response.person.City;
                this.details.Email = response.person.Email;
                this.details.Cellphone = response.person.Mobilenumber;
                if (this.details.AdminStatus === "0") {
                    this.details.AdminStatus = "Pending";
                    //this.buybtn = false
                }
                if (this.details.AdminStatus === "Approved") {
                    // this.buybtn = true
                }
                this.details.Type = response.person.Type;
            }
        }, error => {
            if (error.status == "401") {
                this.errorMessage = "Incorrect Verification Code";
            }
            if (error.status == "0") {
                this.errorMessage = "Service Unavaliable";
            }
        });
    }
    IncreaseUnitPurchase() {
        this.UnitPurchase++;
        this.UnitPurchaseTotal = this.UnitPurchase * 50;
        this.TotalAmount = this.UnitPurchaseTotal;
    }
    DecreaseUnitPurchase() {
        this.UnitPurchase--;
        this.UnitPurchaseTotal = this.UnitPurchase * 50;
        this.TotalAmount = this.UnitPurchaseTotal;
    }
    gotoReview() {
        if (this.UnitPurchase < 1) {
            return;
        }
        this.showCreditsReview = true;
        this.showBuycredits = false;
    }
    gotoPayment() {
        const Units = this.UnitPurchase * 50.00;
        const data = {
            name_first: this.details.Name,
            name_last: this.details.ResellerID,
            email_address: this.details.Email,
            cell_number: this.details.Cellphone,
            item_name: Units,
            item_description: Units + ' Units',
            amount: this.TotalAmount,
            m_payment_id: this.details.ResellerID,
            payment_method: this.PaymentMethod,
        };
        const myJSON = encodeURIComponent(JSON.stringify(data));
        console.log(data);
        window.open('http://royallez.co.za/test/checkout.php?data=' + myJSON, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    }
}
BuyResellerComponent.ɵfac = function BuyResellerComponent_Factory(t) { return new (t || BuyResellerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
BuyResellerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuyResellerComponent, selectors: [["app-buy-reseller"]], decls: 5, vars: 3, consts: [["class", "alert alert-success", 4, "ngIf"], [1, "center"], [1, "center-div"], ["class", "buy-units", 4, "ngIf"], ["class", "Review", 4, "ngIf"], [1, "alert", "alert-success"], [1, "buy-units"], [1, "ml-100"], [1, "warning", "mt-30"], [1, "mt-10"], ["src", "../../assets/images/alert.png"], [1, "mt-30"], [1, "input-units"], [1, "button-plus", 3, "click"], ["type", "text", 1, "unit-text", 3, "ngModel"], [1, "totalPrice"], [1, "mt-40"], ["src", "../../assets/images/righArrow.png", 1, "rightArrow", 3, "click"], [1, "Review"], [1, "buygametext"], [1, "support-text"], [1, "warning-review", "mt-30"], [1, "text-date"], [1, "mt-20"], ["src", "../../assets/images/alert.png", 1, "margin-left25"], [1, "text-numbergen"], ["border", "1", 1, "details-table"], [1, "background-grey"], ["colspan", "3", 2, "text-align", "right", "font-weight", "bold"], [1, "payment-other-card"], [1, "option-card", 3, "ngModel"], ["value", "", "selected", ""], ["value", "eft"], ["value", "2"], ["value", "cc"], ["value", "dc"], ["value", "bc"], ["value", "mp"], ["value", "mc"], ["value", "6"], [1, "paymentcard"], ["type", "radio", 1, "paymentradio", "mt-10"], ["src", "../../assets/images/mastercard.png"], [1, "payment-number"]], template: function BuyResellerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BuyResellerComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BuyResellerComponent_div_3_Template, 29, 9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BuyResellerComponent_div_4_Template, 84, 22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showBuycredits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCreditsReview);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["body[_ngcontent-%COMP%]{\n    background: #eee;\n}\nspan[_ngcontent-%COMP%]{\n    font-size:15px;\n}\n.box[_ngcontent-%COMP%]{\n    padding:60px 0px;\n}\n.box-part[_ngcontent-%COMP%]{\n    background:#FFF;\n    border-radius:0;\n    padding:60px 10px;\n    margin:30px 0px;\n}\n.text[_ngcontent-%COMP%]{\n    margin:20px 0px;\n}\n.fa[_ngcontent-%COMP%]{\n     color:#4183D7;\n}\n.center[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    margin: auto;\n    width: 50%;\n\n}\n.center-div[_ngcontent-%COMP%]{\n    margin-top: 20px;\n}\n.card[_ngcontent-%COMP%] {\n    border: #1a242f;\n    transition: 0.3s;\n    width: 300px;\n    height: 120px;\n}\n.warning[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 120px;\n    border: 2px solid #343434;\n    border-radius: 10px;\n    padding: 15px;\n}\n.warning-review[_ngcontent-%COMP%] {\n    width: 350px;\n    height: 130px;\n    border: 2px solid #343434;\n    border-radius: 10px;\n    padding: 15px;\n}\n.mt-10[_ngcontent-%COMP%]{\n    margin-top: 10px;\n}\n.mt-20[_ngcontent-%COMP%]{\n    margin-top: 20px;\n}\n.mt-30[_ngcontent-%COMP%]{\n    margin-top: 30px;\n}\n.ml-100[_ngcontent-%COMP%]{\n    margin-left: 80px;\n}\n.ml-60[_ngcontent-%COMP%]{\n    margin-left: 80px;\n}\n.input-units[_ngcontent-%COMP%]{\n    width: auto;\n}\ninput[type=\"button\"][_ngcontent-%COMP%] {\n    -webkit-appearance: button;\n    cursor: pointer;\n}\n.unit-text[_ngcontent-%COMP%]{\n    max-width: 50px;\n    border: 2px solid #000000;\n    border-radius: 10px;\n    height: 40px;\n    position: relative;\n    font-weight: bold;\n    text-align: center;\n    width: 62px;\n    display: inline-block;\n    font-size: 13px;\n    margin: 0 0 5px;\n    resize: vertical;\n}\n.input-group[_ngcontent-%COMP%]   input[type='button'][_ngcontent-%COMP%] {\n    background-color: #eeeeee;\n    min-width: 38px;\n    width: auto;\n    transition: all 300ms ease;\n}\n.button-plus[_ngcontent-%COMP%] {\n    font-weight: bold;\n    width: 50px;\n    font-size: 30px;\n    padding: 13px;\n    margin-top: 5px;\n    cursor: pointer;\n}\n.totalPrice[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 18px;\n}\n.mt-40[_ngcontent-%COMP%]{\n    margin-top: 40px;\n}\n.rightArrow[_ngcontent-%COMP%] {\n    width: 45px;\n    margin-left: 110px;\n    cursor: pointer;\n}\n.support-text[_ngcontent-%COMP%]{\n    text-align: center;\n    width: 400px;\n    font-size: 14px;\n    color: #717171;\n}\n.text-date[_ngcontent-%COMP%]{\n    font-size: smaller;\n    color: #888888;\n    float: right;\n}\n.margin-left25[_ngcontent-%COMP%]{\n    margin-left: 25px;\n}\n.text-numbergen[_ngcontent-%COMP%]{\n    color: #888888;\n    font-size: smaller;\n}\n.details-table[_ngcontent-%COMP%]{\n    width: 350px;\n    text-align: center;\n}\n.background-grey[_ngcontent-%COMP%]{\n    background: #EBEBEB;\n}\n.buygametext[_ngcontent-%COMP%]\n{\n    font-size: inherit;\n    font-weight: 600;\n}\n.paymentcard[_ngcontent-%COMP%] {\n    width: 350px;\n    height: 100px;\n    box-shadow: 0 1px 6px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n}\n.payment-other-card[_ngcontent-%COMP%]{\n    width: 350px;\n    height: 30px;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    margin-top: 3px;\n    background: #464545;\n    color: white;\n}\n.paymentradio[_ngcontent-%COMP%]{\n    border: 2px solid #000000;\n    border-radius: 10px;\n    height: 25px;\n    position: relative;\n    font-weight: bold;\n    text-align: center;\n    width: 62px;\n    display: inline-block;\n    font-size: 13px;\n    margin: 0 0 5px;\n    resize: vertical;\n}\n.payment-number[_ngcontent-%COMP%]{\n    margin-left: 40px;\n}\n.option-card[_ngcontent-%COMP%]{\n    background: #464545;\n    color: white;\n    width: 350px;\n    height: 30px;\n}\n.paymentCards[_ngcontent-%COMP%]{\n    width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5LXJlc2VsbGVyL2J1eS1yZXNlbGxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtLQUNLLGFBQWE7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osVUFBVTs7QUFFZDtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCO0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFHQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYnV5LXJlc2VsbGVyL2J1eS1yZXNlbGxlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuc3BhbntcbiAgICBmb250LXNpemU6MTVweDtcbn1cbi5ib3h7XG4gICAgcGFkZGluZzo2MHB4IDBweDtcbn1cblxuLmJveC1wYXJ0e1xuICAgIGJhY2tncm91bmQ6I0ZGRjtcbiAgICBib3JkZXItcmFkaXVzOjA7XG4gICAgcGFkZGluZzo2MHB4IDEwcHg7XG4gICAgbWFyZ2luOjMwcHggMHB4O1xufVxuLnRleHR7XG4gICAgbWFyZ2luOjIwcHggMHB4O1xufVxuXG4uZmF7XG4gICAgIGNvbG9yOiM0MTgzRDc7XG59XG4uY2VudGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcblxufVxuLmNlbnRlci1kaXZ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jYXJkIHtcbiAgICBib3JkZXI6ICMxYTI0MmY7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbn1cbi53YXJuaW5nIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzQzNDM0O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbi53YXJuaW5nLXJldmlldyB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzM0MzQzNDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5tdC0xMHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm10LTIwe1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubXQtMzB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5tbC0xMDB7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG59XG4ubWwtNjB7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG59XG5cbi5pbnB1dC11bml0c3tcbiAgICB3aWR0aDogYXV0bztcbn1cbmlucHV0W3R5cGU9XCJidXR0b25cIl0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVuaXQtdGV4dHtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA2MnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luOiAwIDAgNXB4O1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi5pbnB1dC1ncm91cCBpbnB1dFt0eXBlPSdidXR0b24nXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgICBtaW4td2lkdGg6IDM4cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG59XG5cblxuLmJ1dHRvbi1wbHVzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZzogMTNweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRvdGFsUHJpY2V7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLm10LTQwe1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cblxuLnJpZ2h0QXJyb3cge1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3VwcG9ydC10ZXh0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNzE3MTcxO1xufVxuLnRleHQtZGF0ZXtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgY29sb3I6ICM4ODg4ODg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLm1hcmdpbi1sZWZ0MjV7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG4udGV4dC1udW1iZXJnZW57XG4gICAgY29sb3I6ICM4ODg4ODg7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuLmRldGFpbHMtdGFibGV7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5iYWNrZ3JvdW5kLWdyZXl7XG4gICAgYmFja2dyb3VuZDogI0VCRUJFQjtcbn1cbi5idXlnYW1ldGV4dFxue1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnBheW1lbnRjYXJkIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCA2cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5wYXltZW50LW90aGVyLWNhcmR7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgYmFja2dyb3VuZDogIzQ2NDU0NTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ucGF5bWVudHJhZGlve1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNjJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbjogMCAwIDVweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4ucGF5bWVudC1udW1iZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4ub3B0aW9uLWNhcmR7XG4gICAgYmFja2dyb3VuZDogIzQ2NDU0NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cbi5wYXltZW50Q2FyZHN7XG4gICAgd2lkdGg6IDM1MHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuyResellerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buy-reseller',
                templateUrl: './buy-reseller.component.html',
                styleUrls: ['./buy-reseller.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/fgt/fgt.component.ts":
/*!**************************************!*\
  !*** ./src/app/fgt/fgt.component.ts ***!
  \**************************************/
/*! exports provided: FgtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FgtComponent", function() { return FgtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function FgtComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
function FgtComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FgtComponent_div_9_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.mylogin.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FgtComponent_div_9_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.mylogin.username);
} }
function FgtComponent_div_10_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.squestion, " ");
} }
function FgtComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Security Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FgtComponent_div_10_div_6_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FgtComponent_div_10_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.mylogin.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FgtComponent_div_10_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.check(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.squestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.mylogin.username);
} }
function FgtComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FgtComponent_div_11_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.mylogin.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FgtComponent_div_11_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.mylogin.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FgtComponent_div_11_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.mylogin.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.mylogin.password);
} }
function FgtComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FgtComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.LOGIN(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FgtComponent {
    constructor(Api, router) {
        this.Api = Api;
        this.router = router;
        this.mylogin = { username: '', stationID: '', password: '' };
        this.errorMessage = "";
        this.showform = false;
        this.hideme = true;
        this.squestion = '';
        this.answer = '';
        this.email = "";
        this.showlogin = false;
        this.showpwd = false;
    }
    ngOnInit() {
    }
    showPWD() {
        this.router.navigate(['/fgt']);
    }
    reset() {
        this.squestion = "";
        this.errorMessage = "";
        this.Api.reset(this.mylogin.username, this.mylogin.password).subscribe(response => {
            //console.log(response);
            if (response.respond.squestion) {
                this.squestion = response.respond.squestion;
                this.answer = response.respond.answer;
                this.email = this.mylogin.username;
                this.showform = true;
                this.hideme = false;
            }
            else {
                //  this.errorMessage = response. errorList[0].description;
                //     this.setErrorMessage(this.errorMessage);
            }
        }, error => {
            if (error.status == "401") {
                this.errorMessage = "Account not found";
            }
            if (error.status == "0") {
                this.errorMessage = "Service Unavaliable";
            }
        });
    }
    check() {
        this.errorMessage = "";
        if (this.answer == this.mylogin.username) {
            this.errorMessage = "";
            this.Api.sendverifyCode(this.email, this.mylogin.password).subscribe(response => {
                if (response.message.includes("sent")) {
                    console.log(response.message);
                    this.showform = false;
                    this.hideme = false;
                    this.showpwd = true;
                    this.errorMessage = "Verification Code has been sent to your email";
                }
                else {
                    //  this.errorMessage = response. errorList[0].description;
                    //     this.setErrorMessage(this.errorMessage);
                }
            }, error => {
                if (error.status == "401") {
                    this.errorMessage = "Account not found";
                }
                if (error.status == "0") {
                    this.errorMessage = "Service Unavaliable";
                }
            });
        }
        else {
            this.errorMessage = "Incorrect Answer";
        }
    }
    update() {
        this.errorMessage = "";
        this.errorMessage = "";
        this.Api.changepassword(this.email, this.mylogin.username, this.mylogin.password).subscribe(response => {
            console.log(response.message);
            if (response.message.includes("Account updated")) {
                this.errorMessage = "Successfully changed the password";
                this.showlogin = true;
                this.showpwd = false;
            }
            else {
                //  this.errorMessage = response. errorList[0].description;
                //     this.setErrorMessage(this.errorMessage);
            }
        }, error => {
            if (error.status == "401") {
                this.errorMessage = "Incorrect Verification Code";
            }
            if (error.status == "0") {
                this.errorMessage = "Service Unavaliable";
            }
        });
    }
    LOGIN() {
        this.router.navigate(['/login']);
    }
}
FgtComponent.ɵfac = function FgtComponent_Factory(t) { return new (t || FgtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FgtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FgtComponent, selectors: [["app-fgt"]], decls: 13, vars: 5, consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "sidenav"], [1, "login-main-text"], [1, "main"], ["src", "assets/log.jpg", 2, "height", "200px"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "col-md-6 col-sm-12", 4, "ngIf"], ["type", "submit", "class", "btn btn-black", 3, "click", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], [1, "col-md-6", "col-sm-12"], [1, "login-form"], [1, "form-group"], ["type", "text", "name", "email", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-black", 3, "click"], ["class", "alert alert-dark", "role", "alert", 4, "ngIf"], ["type", "text", "name", "answer", "placeholder", "Answer", 1, "form-control", 3, "ngModel", "ngModelChange"], ["role", "alert", 1, "alert", "alert-dark"], ["type", "text", "name", "answer", "placeholder", "Code", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "answer", "placeholder", "New Password", 1, "form-control", 3, "ngModel", "ngModelChange"]], template: function FgtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FgtComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FgtComponent_div_9_Template, 9, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FgtComponent_div_10_Template, 10, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FgtComponent_div_11_Template, 10, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FgtComponent_button_12_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showpwd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showlogin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {\n    font-family: \"Lato\", sans-serif;\n}\n\n\n\n.main-head[_ngcontent-%COMP%]{\n    height: 150px;\n    background: #FFF;\n   \n}\n\n\n\n.sidenav[_ngcontent-%COMP%] {\n    height: 100%;\n    background-color: #000;\n    overflow-x: hidden;\n    padding-top: 20px;\n}\n\n\n\n.main[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n}\n\n\n\n@media screen and (max-height: 450px) {\n    .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\n}\n\n\n\n@media screen and (max-width: 450px) {\n    .login-form[_ngcontent-%COMP%]{\n        margin-top: 10%;\n    }\n\n    .register-form[_ngcontent-%COMP%]{\n        margin-top: 10%;\n    }\n}\n\n\n\n@media screen and (min-width: 768px){\n    .main[_ngcontent-%COMP%]{\n        margin-left: 40%; \n    }\n\n    .sidenav[_ngcontent-%COMP%]{\n        width: 40%;\n        position: fixed;\n        z-index: 1;\n        top: 0;\n        left: 0;\n    }\n\n    .login-form[_ngcontent-%COMP%]{\n        margin-top: 80%;\n    }\n\n    .register-form[_ngcontent-%COMP%]{\n        margin-top: 20%;\n    }\n}\n\n\n\n.login-main-text[_ngcontent-%COMP%]{\n    margin-top: 20%;\n    padding: 60px;\n    color: #fff;\n}\n\n\n\n.login-main-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    font-weight: 300;\n}\n\n\n\n.btn-black[_ngcontent-%COMP%]{\n    background-color: #000 !important;\n    color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmd0L2ZndC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0FBQ25DOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCOztBQUVwQjs7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOzs7O0FBR0E7SUFDSSxpQkFBaUI7QUFDckI7Ozs7QUFFQTtJQUNJLFVBQVUsaUJBQWlCLENBQUM7QUFDaEM7Ozs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7OztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZUFBZTtRQUNmLFVBQVU7UUFDVixNQUFNO1FBQ04sT0FBTztJQUNYOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0FBQ2Y7Ozs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7OztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2ZndC9mZ3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuXG5cbi5tYWluLWhlYWR7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgXG59XG5cbi5zaWRlbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cblxuLm1haW4ge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIC5sb2dpbi1mb3Jte1xuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVyLWZvcm17XG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgICAubWFpbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTsgXG4gICAgfVxuXG4gICAgLnNpZGVuYXZ7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5sb2dpbi1mb3Jte1xuICAgICAgICBtYXJnaW4tdG9wOiA4MCU7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVyLWZvcm17XG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICB9XG59XG5cblxuLmxvZ2luLW1haW4tdGV4dHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgcGFkZGluZzogNjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmxvZ2luLW1haW4tdGV4dCBoMntcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYnRuLWJsYWNre1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FgtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fgt',
                templateUrl: './fgt.component.html',
                styleUrls: ['./fgt.component.css']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/gameunits-ad/gameunits-ad.component.ts":
/*!********************************************************!*\
  !*** ./src/app/gameunits-ad/gameunits-ad.component.ts ***!
  \********************************************************/
/*! exports provided: GameunitsAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameunitsAdComponent", function() { return GameunitsAdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function GameunitsAdComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
function GameunitsAdComponent_tr_69_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameunitsAdComponent_tr_69_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameunitsAdComponent_tr_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameunitsAdComponent_tr_69_button_3_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.showform);
} }
function GameunitsAdComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GameunitsAdComponent_div_70_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.amount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.amount);
} }
function GameunitsAdComponent_button_71_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameunitsAdComponent_button_71_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.setPrice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameunitsAdComponent_button_74_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameunitsAdComponent_button_74_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GameunitsAdComponent {
    constructor(router, Api, localStorageService) {
        this.router = router;
        this.Api = Api;
        this.localStorageService = localStorageService;
        this.errorMessage = "";
        this.username = "";
        this.showdf = false;
        this.pdfSrc = '';
        this.amount = '';
        this.showform = false;
        this.details = { ResellerID: '', Name: '', AdminStatus: '', Type: "" };
    }
    logout() {
        this.localStorageService.clearAll();
        this.router.navigate(['/login']);
    }
    ngOnInit() {
        this.getME();
    }
    getME() {
        this.Api.getPrice().subscribe(response => {
            if (response) {
                this.ItemsArray = response.users;
            }
        }, error => {
            if (error.status == "401") {
                this.errorMessage = "Incorrect Verification Code";
            }
            if (error.status == "0") {
                this.errorMessage = "Service Unavaliable";
            }
        });
    }
    reset() {
        this.showform = true;
    }
    setPrice() {
        if (this.amount == "") {
            this.errorMessage = "Please enter the amount";
        }
        if (this.amount) {
            this.errorMessage = "";
            this.Api.setprice(this.amount).subscribe(response => {
                if (response.message == "created") {
                    this.errorMessage = "Game Unit Price was Successfuly Changed";
                    this.getME();
                    this.showform = false;
                }
            }, error => {
                if (error.status == "0") {
                    this.errorMessage = "Service Unavaliable";
                }
            });
        }
    }
    cancel() {
        this.showform = false;
    }
}
GameunitsAdComponent.ɵfac = function GameunitsAdComponent_Factory(t) { return new (t || GameunitsAdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"])); };
GameunitsAdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameunitsAdComponent, selectors: [["app-gameunits-ad"]], decls: 75, vars: 5, consts: [[1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "container-fluid"], [1, "row"], ["id", "admin-sidebar", 1, "col-md-2", "p-x-0", "p-y-3"], [1, "sidenav", "admin-sidenav", "list-unstyled"], ["routerLink", "/menu", "routerLinkActive", "active"], ["routerLink", "/ps"], ["routerLink", "/gm"], [3, "click"], ["href", "#"], ["id", "admin-main-control", 1, "col-md-10", "p-x-3", "p-y-1"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "container"], [1, "span5"], [1, "table", "table-striped", "table-condensed"], [4, "ngFor", "ngForOf"], ["class", "input-group mb-3", 4, "ngIf"], ["type", "submit", "class", "btn btn-black", 3, "click", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "submit", 1, "btn", "btn-black", 3, "click"], [1, "input-group", "mb-3"], ["type", "number", "name", "email", "placeholder", "Amount", "id", "mail", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"]], template: function GameunitsAdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CHOOHOO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Game Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameunitsAdComponent_Template_li_click_19_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "LOGOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, GameunitsAdComponent_div_59_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Current Price in Rands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, GameunitsAdComponent_tr_69_Template, 4, 2, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, GameunitsAdComponent_div_70_Template, 3, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, GameunitsAdComponent_button_71_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, GameunitsAdComponent_button_74_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ItemsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showform);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["@import 'https://fonts.googleapis.com/css?family=Raleway:300,400';\n\n\nbody[_ngcontent-%COMP%] {\n    font-family: 'Raleway:300', sans-serif\n}\n\n\n.admin-sidenav[_ngcontent-%COMP%] {\n    width: auto;\n\theight: auto;\n\tmargin-left: 0px; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\ttext-decoration: none; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\ttext-align: justify;\n\tpadding: .5rem;\n\tpadding-left: 1rem;\n\ttransition: all .2s linear;\n\tbackground-color: #000;\n\tborder: 1px solid #333; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n\tborder-radius: 0 .5rem .5rem 0;\n\tborder-color: #02d3f5;\n\ttransform: translate(30px, 0px);\n\tbackground: linear-gradient(to right, #006a7b, #002340); \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXVuaXRzLWFkL2dhbWV1bml0cy1hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlFQUFpRTs7O0FBR2pFO0lBQ0k7QUFDSjs7O0FBRUE7SUFDSSxXQUFXO0NBQ2QsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7O0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7OztBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxrQkFBa0I7Q0FFbEIsMEJBQTBCO0NBQzFCLHNCQUFzQjtDQUN0QixzQkFBc0I7QUFDdkI7OztBQUNBO0NBQ0MsV0FBVztBQUNaOzs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIscUJBQXFCO0NBRXJCLCtCQUErQjtDQUUvQix1REFBdUQ7QUFDeEQ7OztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXVuaXRzLWFkL2dhbWV1bml0cy1hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MzAwLDQwMCc7XG5cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5OjMwMCcsIHNhbnMtc2VyaWZcbn1cbiAgICBcbi5hZG1pbi1zaWRlbmF2IHtcbiAgICB3aWR0aDogYXV0bztcblx0aGVpZ2h0OiBhdXRvO1xuXHRtYXJnaW4tbGVmdDogMHB4OyBcbn1cbi5hZG1pbi1zaWRlbmF2IGEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxufVxuLmFkbWluLXNpZGVuYXYgbGkge1xuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXHRwYWRkaW5nOiAuNXJlbTtcblx0cGFkZGluZy1sZWZ0OiAxcmVtO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuXHR0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDtcblx0Ym9yZGVyOiAxcHggc29saWQgIzMzMzsgXG59XG4uYWRtaW4tc2lkZW5hdiBsaSBhIHtcblx0Y29sb3I6ICNmZmY7IFxufVxuXG4uYWRtaW4tc2lkZW5hdiBsaSBhOmFjdGl2ZSB7XG5cdGJvcmRlci1jb2xvcjogIzAyZDNmNTsgXG59XG5cbi5hZG1pbi1zaWRlbmF2IGxpOmhvdmVyIHtcblx0Ym9yZGVyLXJhZGl1czogMCAuNXJlbSAuNXJlbSAwO1xuXHRib3JkZXItY29sb3I6ICMwMmQzZjU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzAwNmE3YiwgIzAwMjM0MCk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNmE3YiwgIzAwMjM0MCk7IFxufVxuXG4uYWRtaW4tc2lkZW5hdiBsaTphY3RpdmUge1xuXHRib3JkZXItY29sb3I6ICMwMmQzZjU7IFxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameunitsAdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gameunits-ad',
                templateUrl: './gameunits-ad.component.html',
                styleUrls: ['./gameunits-ad.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/history-reseller/history-reseller.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/history-reseller/history-reseller.component.ts ***!
  \****************************************************************/
/*! exports provided: HistoryResellerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryResellerComponent", function() { return HistoryResellerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function HistoryResellerComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
function HistoryResellerComponent_tr_80_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} }
function HistoryResellerComponent_tr_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HistoryResellerComponent_tr_80_img_2_Template, 1, 0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.method == "paypal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.units, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.transcationID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.Unicode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.created, " ");
} }
class HistoryResellerComponent {
    constructor(router, Api, localStorageService) {
        this.router = router;
        this.Api = Api;
        this.localStorageService = localStorageService;
        this.errorMessage = "";
        this.username = "";
        this.showbuy = false;
        this.buybtn = false;
        this.addScript = false;
        this.paypalLoad = true;
        this.finalAmount = 1;
        this.total = 0;
        this.showSuccess = false;
        this.details = { ResellerID: '', Name: '', AdminStatus: '', Type: "", units: "" };
        this.paypal = { Type: "",
            Name: "",
            Surname: "",
            Email: "",
            method: "",
            units: "",
            Country: "",
            transcationID: "",
            price: "",
            ResellerID: "", };
    }
    ngOnInit() {
        this.getME();
    }
    getME() {
        this.errorMessage = "";
        this.username = this.localStorageService.get('ResellerID');
        this.Api.history(this.username).subscribe(response => {
            if (response) {
                this.ItemsArray = response.person;
            }
        }, error => {
            if (error.status == "401") {
                this.errorMessage = "Incorrect Verification Code";
            }
            if (error.status == "0") {
                this.errorMessage = "Service Unavaliable";
            }
        });
    }
    Buy() {
        this.showbuy = true;
        this.getprice();
    }
    dontBuy() {
        this.showbuy = false;
        this.total = 0;
        this.price = 0;
        this.number = 0;
    }
    getprice() {
        this.Api.getPrice().subscribe(response => {
            if (response) {
                this.ItemsArray = response.users;
                this.price = this.ItemsArray[0].price;
            }
        }, error => {
            if (error.status == "401") {
                this.errorMessage = "Incorrect Verification Code";
            }
            if (error.status == "0") {
                this.errorMessage = "Service Unavaliable";
            }
        });
    }
    logout() {
        this.localStorageService.clearAll();
        this.router.navigate(['/login']);
    }
}
HistoryResellerComponent.ɵfac = function HistoryResellerComponent_Factory(t) { return new (t || HistoryResellerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"])); };
HistoryResellerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoryResellerComponent, selectors: [["app-history-reseller"]], decls: 81, vars: 2, consts: [[1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "container-fluid", 2, "margin-right", "20%"], [1, "row"], ["id", "admin-sidebar", 1, "col-md-2", "p-x-0", "p-y-3"], [1, "sidenav", "admin-sidenav", "list-unstyled"], ["routerLink", "/rs", "routerLinkActive", "active"], ["routerLink", "/pf"], ["routerLink", "/hr"], ["routerLink", "/payments"], [3, "click"], ["href", "#"], ["id", "admin-main-control", 1, "col-md-10", "p-x-3", "p-y-1"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "container"], [1, "span5"], [1, "table", "table-striped", "table-condensed"], [4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "alert-danger"], ["src", "https://www.paypalobjects.com/webstatic/en_US/i/buttons/pp-acceptance-small.png", "alt", "Buy now with PayPal", 4, "ngIf"], ["src", "https://www.paypalobjects.com/webstatic/en_US/i/buttons/pp-acceptance-small.png", "alt", "Buy now with PayPal"]], template: function HistoryResellerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CHOOHOO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Become Reseller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reseller Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Transcations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryResellerComponent_Template_li_click_22_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "LOGOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, HistoryResellerComponent_div_62_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Method of Paymethod");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Game Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "transcationID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, HistoryResellerComponent_tr_80_Template, 11, 5, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ItemsArray);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\n@media(min-width:768px) {\n    body[_ngcontent-%COMP%] {\n        margin-top: 50px;\n    }\n    \n}\n#wrapper[_ngcontent-%COMP%] {\n    padding-left: 0;    \n}\n#page-wrapper[_ngcontent-%COMP%] {\n    width: 100%;        \n    padding: 0;\n    background-color: #fff;\n}\n@media(min-width:768px) {\n    #wrapper[_ngcontent-%COMP%] {\n        padding-left: 225px;\n    }\n\n    #page-wrapper[_ngcontent-%COMP%] {\n        padding: 22px 10px;\n    }\n}\n\n.top-nav[_ngcontent-%COMP%] {\n    padding: 0 15px;\n}\n.top-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n    display: inline-block;\n    float: left;\n}\n.top-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    line-height: 20px;\n    color: #fff;\n}\n.top-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .top-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .top-nav[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .top-nav[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .top-nav[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus {\n    color: #fff;\n    background-color: #1a242f;\n}\n.top-nav[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] > .dropdown-menu[_ngcontent-%COMP%] {\n    float: left;\n    position: absolute;\n    margin-top: 0;\n    \n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    background-color: #fff;\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\n}\n.top-nav[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] > .dropdown-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n    white-space: normal;\n}\n\n@media(min-width:768px) {\n    .side-nav[_ngcontent-%COMP%] {\n        position: fixed;\n        top: 60px;\n        left: 225px;\n        width: 225px;\n        margin-left: -225px;\n        border: none;\n        border-radius: 0;\n        border-top: 1px rgba(0,0,0,.5) solid;\n        overflow-y: auto;\n        background-color: #222;\n        \n        bottom: 0;\n        overflow-x: hidden;\n        padding-bottom: 40px;\n    }\n\n    .side-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n        width: 225px;\n        border-bottom: 1px rgba(0,0,0,.3) solid;\n    }\n\n    .side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n        outline: none;\n        background-color: #1a242f !important;\n    }\n}\n.side-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] {\n    padding: 0;\n    border-bottom: 1px rgba(0,0,0,.3) solid;\n}\n.side-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n    display: block;\n    padding: 10px 15px 10px 38px;\n    text-decoration: none;\n    \n    color: #fff;    \n}\n.side-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\n    color: #fff;\n}\n.navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .label[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  position: absolute;\n  top: 14px;\n  right: 6px;\n  font-size: 10px;\n  font-weight: normal;\n  min-width: 15px;\n  min-height: 15px;\n  line-height: 1.0em;\n  text-align: center;\n  padding: 2px;\n}\n.navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover    > .label[_ngcontent-%COMP%] {\n  top: 10px;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n    padding: 5px 15px;\n}\n#custom-search-input[_ngcontent-%COMP%] {\n    margin:0;\n    margin-top: 10px;\n    padding: 0;\n}\n#custom-search-input[_ngcontent-%COMP%]   .search-query[_ngcontent-%COMP%] {\n    padding-right: 3px;\n    padding-right: 4px \\9;\n    padding-left: 3px;\n    padding-left: 4px \\9;\n    \n\n    margin-bottom: 0;\n    border-radius: 3px;\n}\n#custom-search-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border: 0;\n    background: none;\n    \n    padding: 2px 5px;\n    margin-top: 2px;\n    position: relative;\n    left: -28px;\n    \n    margin-bottom: 0;\n    border-radius: 3px;\n    color:#D9230F;\n}\n.search-query[_ngcontent-%COMP%]:focus    + button[_ngcontent-%COMP%] {\n    z-index: 3;   \n}\nbody[_ngcontent-%COMP%] {\n    font-family: \"Lato\", sans-serif;\n}\n.main-head[_ngcontent-%COMP%]{\n    height: 150px;\n    background: #FFF;\n   \n}\n.sidenav[_ngcontent-%COMP%] {\n    height: 100%;\n    background-color: #000;\n    overflow-x: hidden;\n    padding-top: 20px;\n}\n.main[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n}\n@media screen and (max-height: 450px) {\n    .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\n}\n@media screen and (max-width: 450px) {\n    .login-form[_ngcontent-%COMP%]{\n        margin-top: 10%;\n    }\n\n    .register-form[_ngcontent-%COMP%]{\n        margin-top: 10%;\n    }\n}\n@media screen and (min-width: 768px){\n    .main[_ngcontent-%COMP%]{\n        margin-left: 40%; \n    }\n\n    .sidenav[_ngcontent-%COMP%]{\n        width: 40%;\n        position: fixed;\n        z-index: 1;\n        top: 0;\n        left: 0;\n    }\n\n    .login-form[_ngcontent-%COMP%]{\n        margin-top: 80%;\n    }\n\n    .register-form[_ngcontent-%COMP%]{\n        margin-top: 20%;\n    }\n}\n.login-main-text[_ngcontent-%COMP%]{\n    margin-top: 20%;\n    padding: 60px;\n    color: #fff;\n}\n.login-main-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    font-weight: 300;\n}\n.btn-black[_ngcontent-%COMP%]{\n    background-color: #000 !important;\n    color: #fff;\n}\n.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{\n    vertical-align: middle;\n}\n@media screen and (max-width: 600px) {\n    table#cart[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{\n\t\twidth:20%;\n\t\tdisplay: inline !important;\n\t}\n\t.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\n\t\twidth:36%;\n\t\tmargin:1.5em 0;\n\t}\n\t\n\t.actions[_ngcontent-%COMP%]   .btn-info[_ngcontent-%COMP%]{\n\t\tfloat:left;\n\t}\n\t.actions[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]{\n\t\tfloat:right;\n\t}\n\t\n\ttable#cart[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] { display: none; }\n\ttable#cart[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { display: block; padding: .6rem; min-width:320px;}\n\ttable#cart[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child { background: #333; color: #fff; }\n\ttable#cart[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n\t\tcontent: attr(data-th); font-weight: bold;\n\t\tdisplay: inline-block; width: 8rem;\n\t}\n\t\n\t\n\t\n\ttable#cart[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:block; }\n\ttable#cart[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{display:block;}\n\t\n}\nbody[_ngcontent-%COMP%] {\n    font-family: 'Raleway:300', sans-serif\n}\n.admin-sidenav[_ngcontent-%COMP%] {\n    width: auto;\n\theight: auto;\n\tmargin-left: 0px; \n}\n.admin-sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\ttext-decoration: none; \n}\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\ttext-align: justify;\n\tpadding: .5rem;\n\tpadding-left: 1rem;\n\ttransition: all .2s linear;\n\tbackground-color: #000;\n\tborder: 1px solid #333; \n}\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff; \n}\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n\tborder-radius: 0 .5rem .5rem 0;\n\tborder-color: #02d3f5;\n\ttransform: translate(30px, 0px);\n\tbackground: linear-gradient(to right, #006a7b, #002340); \n}\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS1yZXNlbGxlci9oaXN0b3J5LXJlc2VsbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEZBQTBGO0FBQzFGO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQSx3RUFBd0U7QUFDNUU7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCO0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKO0FBRUEsbUJBQW1CO0FBRW5CO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBRUE7Ozs7O0lBS0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBRXRCLHVDQUF1QztBQUMzQztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUEsb0JBQW9CO0FBRXBCO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsU0FBUztRQUNULFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsb0NBQW9DO1FBQ3BDLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLHVDQUF1QztJQUMzQzs7SUFFQTs7UUFFSSxhQUFhO1FBQ2Isb0NBQW9DO0lBQ3hDO0FBQ0o7QUFFQTtJQUNJLFVBQVU7SUFDVix1Q0FBdUM7QUFDM0M7QUFFQTtJQUNJLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0VBR0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFHQTtJQUNJLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0VBQWtFOztJQUVsRSxnQkFBZ0I7SUFHaEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0VBQWtFO0lBQ2xFLGdCQUFnQjtJQUdoQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFJQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7O0FBRXBCO0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksVUFBVSxpQkFBaUIsQ0FBQztBQUNoQztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixlQUFlO1FBQ2YsVUFBVTtRQUNWLE1BQU07UUFDTixPQUFPO0lBQ1g7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBR0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJO0VBQ0YsU0FBUztFQUNULDBCQUEwQjtDQUMzQjtDQUNBO0VBQ0MsU0FBUztFQUNULGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLFVBQVU7Q0FDWDtDQUNBO0VBQ0MsV0FBVztDQUNaOztDQUVBLG1CQUFtQixhQUFhLEVBQUU7Q0FDbEMsc0JBQXNCLGNBQWMsRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDO0NBQ3RFLHFDQUFxQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUU7Q0FDcEU7RUFDQyxzQkFBc0IsRUFBRSxpQkFBaUI7RUFDekMscUJBQXFCLEVBQUUsV0FBVztDQUNuQzs7OztDQUlBLG9CQUFvQixhQUFhLEVBQUU7Q0FDbkMseUJBQXlCLGFBQWEsQ0FBQzs7QUFFeEM7QUFRQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLFdBQVc7Q0FDZCxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2Qsa0JBQWtCO0NBRWxCLDBCQUEwQjtDQUMxQixzQkFBc0I7Q0FDdEIsc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFFQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLHFCQUFxQjtDQUVyQiwrQkFBK0I7Q0FFL0IsdURBQXVEO0FBQ3hEO0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9oaXN0b3J5LXJlc2VsbGVyL2hpc3RvcnktcmVzZWxsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjMuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpIHtcbiAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG4gICAgLypodG1sLCBib2R5LCAjd3JhcHBlciwgI3BhZ2Utd3JhcHBlciB7aGVpZ2h0OiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuO30qL1xufVxuXG4jd3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwOyAgICBcbn1cblxuI3BhZ2Utd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7ICAgICAgICBcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpIHtcbiAgICAjd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjI1cHg7XG4gICAgfVxuXG4gICAgI3BhZ2Utd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDIycHggMTBweDtcbiAgICB9XG59XG5cbi8qIFRvcCBOYXZpZ2F0aW9uICovXG5cbi50b3AtbmF2IHtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi50b3AtbmF2PmxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50b3AtbmF2PmxpPmEge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4udG9wLW5hdj5saT5hOmhvdmVyLFxuLnRvcC1uYXY+bGk+YTpmb2N1cyxcbi50b3AtbmF2Pi5vcGVuPmEsXG4udG9wLW5hdj4ub3Blbj5hOmhvdmVyLFxuLnRvcC1uYXY+Lm9wZW4+YTpmb2N1cyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjQyZjtcbn1cblxuLnRvcC1uYXY+Lm9wZW4+LmRyb3Bkb3duLW1lbnUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIC8qYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTUpOyovXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KTtcbn1cblxuLnRvcC1uYXY+Lm9wZW4+LmRyb3Bkb3duLW1lbnU+bGk+YSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLyogU2lkZSBOYXZpZ2F0aW9uICovXG5cbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpIHtcbiAgICAuc2lkZS1uYXYge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgbGVmdDogMjI1cHg7XG4gICAgICAgIHdpZHRoOiAyMjVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMjVweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggcmdiYSgwLDAsMCwuNSkgc29saWQ7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gICAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzVBNkI3RDsqL1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgfVxuXG4gICAgLnNpZGUtbmF2PmxpPmEge1xuICAgICAgICB3aWR0aDogMjI1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsMCwwLC4zKSBzb2xpZDtcbiAgICB9XG5cbiAgICAuc2lkZS1uYXYgbGkgYTpob3ZlcixcbiAgICAuc2lkZS1uYXYgbGkgYTpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTI0MmYgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5zaWRlLW5hdj5saT51bCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XG59XG5cbi5zaWRlLW5hdj5saT51bD5saT5hIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAzOHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAvKmNvbG9yOiAjOTk5OyovXG4gICAgY29sb3I6ICNmZmY7ICAgIFxufVxuXG4uc2lkZS1uYXY+bGk+dWw+bGk+YTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXZiYXIgLm5hdiA+IGxpID4gYSA+IC5sYWJlbCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTRweDtcbiAgcmlnaHQ6IDZweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtaW4td2lkdGg6IDE1cHg7XG4gIG1pbi1oZWlnaHQ6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjBlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5uYXZiYXIgLm5hdiA+IGxpID4gYTpob3ZlciA+IC5sYWJlbCB7XG4gIHRvcDogMTBweDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5cblxuI2N1c3RvbS1zZWFyY2gtaW5wdXQge1xuICAgIG1hcmdpbjowO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzogMDtcbn1cblxuI2N1c3RvbS1zZWFyY2gtaW5wdXQgLnNlYXJjaC1xdWVyeSB7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDRweCBcXDk7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHggXFw5O1xuICAgIC8qIElFNy04IGRvZXNuJ3QgaGF2ZSBib3JkZXItcmFkaXVzLCBzbyBkb24ndCBpbmRlbnQgdGhlIHBhZGRpbmcgKi9cblxuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4jY3VzdG9tLXNlYXJjaC1pbnB1dCBidXR0b24ge1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIC8qKiBiZWxvd3Mgc3R5bGVzIGFyZSB3b3JraW5nIGdvb2QgKi9cbiAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTI4cHg7XG4gICAgLyogSUU3LTggZG9lc24ndCBoYXZlIGJvcmRlci1yYWRpdXMsIHNvIGRvbid0IGluZGVudCB0aGUgcGFkZGluZyAqL1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGNvbG9yOiNEOTIzMEY7XG59XG5cbi5zZWFyY2gtcXVlcnk6Zm9jdXMgKyBidXR0b24ge1xuICAgIHotaW5kZXg6IDM7ICAgXG59XG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cblxuXG4ubWFpbi1oZWFke1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgIFxufVxuXG4uc2lkZW5hdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG5cbi5tYWluIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gICAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAubG9naW4tZm9ybXtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIH1cblxuICAgIC5yZWdpc3Rlci1mb3Jte1xuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XG4gICAgLm1haW57XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7IFxuICAgIH1cblxuICAgIC5zaWRlbmF2e1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAubG9naW4tZm9ybXtcbiAgICAgICAgbWFyZ2luLXRvcDogODAlO1xuICAgIH1cblxuICAgIC5yZWdpc3Rlci1mb3Jte1xuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgfVxufVxuXG5cbi5sb2dpbi1tYWluLXRleHR7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5sb2dpbi1tYWluLXRleHQgaDJ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJ0bi1ibGFja3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG59XG4udGFibGU+dGJvZHk+dHI+dGQsIC50YWJsZT50Zm9vdD50cj50ZHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB0YWJsZSNjYXJ0IHRib2R5IHRkIC5mb3JtLWNvbnRyb2x7XG5cdFx0d2lkdGg6MjAlO1xuXHRcdGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuXHR9XG5cdC5hY3Rpb25zIC5idG57XG5cdFx0d2lkdGg6MzYlO1xuXHRcdG1hcmdpbjoxLjVlbSAwO1xuXHR9XG5cdFxuXHQuYWN0aW9ucyAuYnRuLWluZm97XG5cdFx0ZmxvYXQ6bGVmdDtcblx0fVxuXHQuYWN0aW9ucyAuYnRuLWRhbmdlcntcblx0XHRmbG9hdDpyaWdodDtcblx0fVxuXHRcblx0dGFibGUjY2FydCB0aGVhZCB7IGRpc3BsYXk6IG5vbmU7IH1cblx0dGFibGUjY2FydCB0Ym9keSB0ZCB7IGRpc3BsYXk6IGJsb2NrOyBwYWRkaW5nOiAuNnJlbTsgbWluLXdpZHRoOjMyMHB4O31cblx0dGFibGUjY2FydCB0Ym9keSB0ciB0ZDpmaXJzdC1jaGlsZCB7IGJhY2tncm91bmQ6ICMzMzM7IGNvbG9yOiAjZmZmOyB9XG5cdHRhYmxlI2NhcnQgdGJvZHkgdGQ6YmVmb3JlIHtcblx0XHRjb250ZW50OiBhdHRyKGRhdGEtdGgpOyBmb250LXdlaWdodDogYm9sZDtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA4cmVtO1xuXHR9XG5cdFxuXHRcblx0XG5cdHRhYmxlI2NhcnQgdGZvb3QgdGR7ZGlzcGxheTpibG9jazsgfVxuXHR0YWJsZSNjYXJ0IHRmb290IHRkIC5idG57ZGlzcGxheTpibG9jazt9XG5cdFxufVxuXG5cblxuXG5AaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTozMDAsNDAwJztcblxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXk6MzAwJywgc2Fucy1zZXJpZlxufVxuICAgIFxuLmFkbWluLXNpZGVuYXYge1xuICAgIHdpZHRoOiBhdXRvO1xuXHRoZWlnaHQ6IGF1dG87XG5cdG1hcmdpbi1sZWZ0OiAwcHg7IFxufVxuLmFkbWluLXNpZGVuYXYgYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXG59XG4uYWRtaW4tc2lkZW5hdiBsaSB7XG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XG5cdHBhZGRpbmc6IC41cmVtO1xuXHRwYWRkaW5nLWxlZnQ6IDFyZW07XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XG5cdHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzMzOyBcbn1cbi5hZG1pbi1zaWRlbmF2IGxpIGEge1xuXHRjb2xvcjogI2ZmZjsgXG59XG5cbi5hZG1pbi1zaWRlbmF2IGxpIGE6YWN0aXZlIHtcblx0Ym9yZGVyLWNvbG9yOiAjMDJkM2Y1OyBcbn1cblxuLmFkbWluLXNpZGVuYXYgbGk6aG92ZXIge1xuXHRib3JkZXItcmFkaXVzOiAwIC41cmVtIC41cmVtIDA7XG5cdGJvcmRlci1jb2xvcjogIzAyZDNmNTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDA2YTdiLCAjMDAyMzQwKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA2YTdiLCAjMDAyMzQwKTsgXG59XG5cbi5hZG1pbi1zaWRlbmF2IGxpOmFjdGl2ZSB7XG5cdGJvcmRlci1jb2xvcjogIzAyZDNmNTsgXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryResellerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-history-reseller',
                templateUrl: './history-reseller.component.html',
                styleUrls: ['./history-reseller.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function LoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
class LoginComponent {
    constructor(Api, localStorageService, router) {
        this.Api = Api;
        this.localStorageService = localStorageService;
        this.router = router;
        this.mylogin = { username: '', stationID: '', password: '' };
        this.showReset = false;
        this.errorMessage = "";
        this.state = "";
    }
    ngOnInit() {
    }
    Login() {
        this.errorMessage = "";
        this.Api.login(this.mylogin.username, this.mylogin.password).subscribe(response => {
            // console.log(response.found.Email);
            if (response) {
                if (response.token) {
                    const decodedToken = helper.decodeToken(response.token);
                    this.localStorageService.set('ID', decodedToken.user.Email);
                    this.localStorageService.set('Status', decodedToken.user.Status);
                    this.localStorageService.set('ChoohooID', decodedToken.user.ChoohooID);
                    this.localStorageService.set('ResellerID', decodedToken.user.ResellerID);
                    this.localStorageService.set('AdminStatus', decodedToken.user.AdminStatus);
                    this.localStorageService.set('state', 'in');
                    const role = this.localStorageService.get('AdminStatus');
                    if (role == "SuperAdmin") {
                        this.router.navigate(['/ad']);
                    }
                    if (role == "AdminManager") {
                        this.router.navigate(['/ad']);
                    }
                    if (role == "0") {
                        this.router.navigate(['/pr']);
                    }
                }
                // this.localStorageService.set('userId', this.mylogin.username);
            }
            else {
                //  this.errorMessage = response. errorList[0].description;
                //     this.setErrorMessage(this.errorMessage);
            }
        }, error => {
            if (error.status == "401") {
                this.errorMessage = "Wrong Email or  Password";
            }
            if (error.status == "0") {
                this.errorMessage = "Service Unavaliable";
            }
        });
    }
    showPWD() {
        this.router.navigate(['/fgt']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 3, consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "sidenav"], [1, "login-main-text"], [1, "main"], ["src", "assets/log.jpg", 2, "height", "200px"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "col-md-6", "col-sm-12"], [1, "login-form"], [1, "form-group"], ["type", "text", "name", "email", "placeholder", "User Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-black", 3, "click"], ["type", "submit", 1, "btn", "btn-secondary", 3, "click"], ["role", "alert", 1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.mylogin.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) { return ctx.mylogin.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() { return ctx.Login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() { return ctx.showPWD(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mylogin.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mylogin.password);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {\n    font-family: \"Lato\", sans-serif;\n}\n\n\n\n.main-head[_ngcontent-%COMP%]{\n    height: 150px;\n    background: #FFF;\n   \n}\n\n\n\n.sidenav[_ngcontent-%COMP%] {\n    height: 100%;\n    background-color: #000;\n    overflow-x: hidden;\n    padding-top: 20px;\n}\n\n\n\n.main[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n}\n\n\n\n@media screen and (max-height: 450px) {\n    .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\n}\n\n\n\n@media screen and (max-width: 450px) {\n    .login-form[_ngcontent-%COMP%]{\n        margin-top: 10%;\n    }\n\n    .register-form[_ngcontent-%COMP%]{\n        margin-top: 10%;\n    }\n}\n\n\n\n@media screen and (min-width: 768px){\n    .main[_ngcontent-%COMP%]{\n        margin-left: 40%; \n    }\n\n    .sidenav[_ngcontent-%COMP%]{\n        width: 40%;\n        position: fixed;\n        z-index: 1;\n        top: 0;\n        left: 0;\n    }\n\n    .login-form[_ngcontent-%COMP%]{\n        margin-top: 80%;\n    }\n\n    .register-form[_ngcontent-%COMP%]{\n        margin-top: 20%;\n    }\n}\n\n\n\n.login-main-text[_ngcontent-%COMP%]{\n    margin-top: 20%;\n    padding: 60px;\n    color: #fff;\n}\n\n\n\n.login-main-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    font-weight: 300;\n}\n\n\n\n.btn-black[_ngcontent-%COMP%]{\n    background-color: #000 !important;\n    color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtBQUNuQzs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjs7QUFFcEI7Ozs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7OztBQUdBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7O0FBRUE7SUFDSSxVQUFVLGlCQUFpQixDQUFDO0FBQ2hDOzs7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7Ozs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7UUFDZixVQUFVO1FBQ1YsTUFBTTtRQUNOLE9BQU87SUFDWDs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7Ozs7QUFHQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztBQUNmOzs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7Ozs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5cblxuLm1haW4taGVhZHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICBcbn1cblxuLnNpZGVuYXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuXG4ubWFpbiB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAgIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgLmxvZ2luLWZvcm17XG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB9XG5cbiAgICAucmVnaXN0ZXItZm9ybXtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xuICAgIC5tYWlue1xuICAgICAgICBtYXJnaW4tbGVmdDogNDAlOyBcbiAgICB9XG5cbiAgICAuc2lkZW5hdntcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmxvZ2luLWZvcm17XG4gICAgICAgIG1hcmdpbi10b3A6IDgwJTtcbiAgICB9XG5cbiAgICAucmVnaXN0ZXItZm9ybXtcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIH1cbn1cblxuXG4ubG9naW4tbWFpbi10ZXh0e1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBwYWRkaW5nOiA2MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubG9naW4tbWFpbi10ZXh0IGgye1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5idG4tYmxhY2t7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/manager/manager.component.ts":
/*!**********************************************!*\
  !*** ./src/app/manager/manager.component.ts ***!
  \**********************************************/
/*! exports provided: ManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return ManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");







function ManagerComponent_tr_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6 == null ? null : item_r6.userNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6 == null ? null : item_r6.managerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6 == null ? null : item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6 == null ? null : item_r6.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6 == null ? null : item_r6.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6 == null ? null : item_r6.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6 == null ? null : item_r6.dateTimeCreated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6 == null ? null : item_r6.dateTimeLastActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6 == null ? null : item_r6.countryCity);
} }
function ManagerComponent_ng_template_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Prev");
} }
function ManagerComponent_ng_template_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Next");
} }
function ManagerComponent_ng_template_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getPageSymbol(p_r7));
} }
function ManagerComponent_ng_template_116_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_ng_template_116_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Surname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Verify Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Verify Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ManagerComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.page = 4;
    }
    ngOnInit() {
        this.managerArray = [
            { 'userNo': '01', 'managerId': '001', 'name': 'Cape town', 'surname': 'dummyData Cape town', 'role': 'Longer Name', 'email': 'CapeTownCity@mail.com', 'dateTimeCreated': '29/10/19 14:00', 'dateTimeLastActive': '29/10/19 14:00', 'countryCity': 'Longer Name 2 lines' },
            { 'userNo': '02', 'managerId': '002', 'name': 'Cape town', 'surname': 'dummyData Cape town', 'role': 'Longer Name', 'email': 'CapeTownCity@mail.com', 'dateTimeCreated': '29/10/19 14:00', 'dateTimeLastActive': '29/10/19 14:00', 'countryCity': 'Longer Name 2 lines' },
            { 'userNo': '03', 'managerId': '003', 'name': 'Cape town', 'surname': 'dummyData Cape town', 'role': 'Longer Name', 'email': 'CapeTownCity@mail.com', 'dateTimeCreated': '29/10/19 14:00', 'dateTimeLastActive': '29/10/19 14:00', 'countryCity': 'Longer Name 2 lines' },
            { 'userNo': '04', 'managerId': '003', 'name': 'Cape town', 'surname': 'dummyData Cape town', 'role': 'Longer Name', 'email': 'CapeTownCity@mail.com', 'dateTimeCreated': '29/10/19 14:00', 'dateTimeLastActive': '29/10/19 14:00', 'countryCity': 'Longer Name 2 lines' },
            { 'userNo': '04', 'managerId': '003', 'name': 'Cape town', 'surname': 'dummyData Cape town', 'role': 'Longer Name', 'email': 'CapeTownCity@mail.com', 'dateTimeCreated': '29/10/19 14:00', 'dateTimeLastActive': '29/10/19 14:00', 'countryCity': 'Longer Name 2 lines' }
        ];
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
    }
    getPageSymbol(current) {
        return ['1', '2', '3', '4', '5', '6', '7'][current - 1];
    }
}
ManagerComponent.ɵfac = function ManagerComponent_Factory(t) { return new (t || ManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"])); };
ManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagerComponent, selectors: [["app-manager"]], decls: 118, vars: 6, consts: [[1, "container-align"], [1, "container-fluid"], [1, "nav-container"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mt-2"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "btn", "btn-sm", "btn-outline-dark", "breadcrumbAddButton", 3, "click"], [1, "fa", "fa-plus-circle"], [1, "btn", "btn-sm", "btn-outline-dark", "breadcrumbPrintButton"], [1, "input-group", "breadcrumbSearchInput", "col-sm-3"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-secondary"], [1, "fa", "fa-search"], [1, "row"], [1, "form-group"], [1, "d-inline-block"], ["name", "pageSize", 1, "custom-select", "mt-2", "mb-2", 2, "width", "auto"], [3, "ngValue"], ["role", "toolbar", "aria-label", "Toolbar with button groups", 1, "btn-toolbar", "mt-2", "ml-2"], ["role", "group", "aria-label", "First group", 1, "btn-group", "mr-2"], ["type", "button", 1, "btn", "btn-secondary", "mx-2"], ["role", "group", "aria-label", "Second group", 1, "btn-group", "mr-2"], [1, "check-boxes-background-color"], [1, "form-check-inline", "col-sm-1", "userNumber-checkbox-align"], [1, "form-check-label"], ["type", "checkbox", "value", "", 1, "form-check-input"], [1, "form-check-inline", "col-sm-1", "manager-checkbox-align"], [1, "form-check-inline", "col-sm-1", "name-checkbox-align"], [1, "form-check-inline", "col-sm-1", "surname-checkbox-align"], [1, "form-check-inline", "col-sm-1", "role-checkbox-align"], [1, "form-check-inline", "col-sm-1", "email-checkbox-align"], [1, "form-check-inline", "col-sm-1", "date-created-checkbox-align"], [1, "form-check-inline", "col-sm-1", "date-last-checkbox-align"], [1, "form-check-inline", "col-sm-1"], [1, "container"], [1, "span5"], [1, "table", "table-sm", "table-striped", "sortable"], [1, "thead-dark"], [2, "width", "10%"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end"], ["aria-label", "Custom pagination", 3, "collectionSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["ngbPaginationNumber", ""], ["template", ""], ["href", "#", 1, "deleteColor"], ["href", "#", 1, "ViewMoreColor"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "input-group", "input-group-sm", "mb-3"], [1, "input-group-prepend"], ["id", "name", 1, "input-group-text"], ["type", "text", "aria-label", "Small", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control"], ["id", "surname", 1, "input-group-text"], ["id", "email", 1, "input-group-text"], ["id", "repeatEmail", 1, "input-group-text"], ["id", "password", 1, "input-group-text"], ["id", "repeatPassword", 1, "input-group-text"]], template: function ManagerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Manages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](117); return ctx.openModal(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Show entries per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Choose Backup Date/s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "From Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "To Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Backup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "thead", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "User No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Manager ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Surname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Date & Time Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Date & Time Last Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Country & City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, ManagerComponent_tr_110_Template, 28, 9, "tr", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ngb-pagination", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ManagerComponent_Template_ngb_pagination_pageChange_112_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, ManagerComponent_ng_template_113_Template, 1, 0, "ng-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, ManagerComponent_ng_template_114_Template, 1, 0, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, ManagerComponent_ng_template_115_Template, 1, 1, "ng-template", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, ManagerComponent_ng_template_116_Template, 37, 0, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.managerArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page);
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPagination"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationPrevious"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationNext"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationNumber"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXIvbWFuYWdlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manager',
                templateUrl: './manager.component.html',
                styleUrls: ['./manager.component.css']
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






class MenuComponent {
    constructor(router, Api, localStorageService) {
        this.router = router;
        this.Api = Api;
        this.localStorageService = localStorageService;
        this.mylogin = { username: '', stationID: '', password: '' };
        this.details = { ChoohooID: '', Surname: '', AdminStatus: '' };
        this.role = "";
        this.errorMessage = '';
        this.showAdmin = false;
        this.showtable = false;
    }
    logout() {
        this.localStorageService.clearAll();
        this.router.navigate(['/login']);
    }
    ngOnInit() {
        this.getRole();
    }
    search() {
        this.showtable = false;
        if (this.mylogin.username == '') {
        }
        else {
            this.errorMessage = "";
            this.errorMessage = "";
            this.Api.search(this.mylogin.username).subscribe(response => {
                if (response) {
                    if (response.user) {
                        this.details.ChoohooID = response.user.ChoohooID;
                        this.details.Surname = response.user.Surname;
                        this.details.AdminStatus = response.user.AdminStatus;
                        if (this.details.AdminStatus == "0") {
                            this.details.AdminStatus = "player";
                        }
                        this.showtable = true;
                        // this.showlogin = true;
                        // this.showpwd =false;
                    }
                    if (response.message == "notfound") {
                        this.errorMessage = "User not Found";
                        // this.showlogin = true;
                        // this.showpwd =false;
                    }
                }
            }, error => {
                if (error.status == "401") {
                    this.errorMessage = "Incorrect Verification Code";
                }
                if (error.status == "0") {
                    this.errorMessage = "Service Unavaliable";
                }
            });
        }
    }
    addAction(action) {
        this.showtable = false;
        console.log(action);
        if (action == '') {
        }
        else {
            this.errorMessage = "";
            this.errorMessage = "";
            this.Api.add(this.mylogin.username, action).subscribe(response => {
                if (response) {
                    if (response.message == "Account deteled") {
                        this.errorMessage = "Account Deleted";
                        this.showtable = false;
                    }
                    if (response.message == "Account updated") {
                        this.errorMessage = "Account updated";
                        this.Api.search(this.mylogin.username).subscribe(response => {
                            if (response) {
                                if (response.user) {
                                    this.details.ChoohooID = response.user.ChoohooID;
                                    this.details.Surname = response.user.Surname;
                                    this.details.AdminStatus = response.user.AdminStatus;
                                    if (this.details.AdminStatus == "0") {
                                        this.details.AdminStatus = "player";
                                    }
                                    this.showtable = true;
                                    // this.showlogin = true;
                                    // this.showpwd =false;
                                }
                                if (response.message == "notfound") {
                                    this.errorMessage = "User not Found";
                                    // this.showlogin = true;
                                    // this.showpwd =false;
                                }
                            }
                        }, error => {
                            if (error.status == "0") {
                                this.errorMessage = "Service Unavaliable";
                            }
                        });
                    }
                }
            }, error => {
                if (error.status == "401") {
                    this.errorMessage = "Incorrect Verification Code";
                }
                if (error.status == "0") {
                    this.errorMessage = "Service Unavaliable";
                }
            });
        }
    }
    getRole() {
        this.role = this.localStorageService.get('AdminStatus');
        console.log(this.role);
        if (this.role == "SuperAdmin") {
            this.showAdmin = true;
        }
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 64, vars: 0, consts: [[1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "container-fluid"], [1, "row"], [1, "nav-side-menu"], [1, "menu-list"], ["id", "menu-content", 1, "menu-content", "collapse", "out"], ["data-toggle", "collapse", "data-target", "#products", 1, "collapsed", "active"], ["href", "#"], [1, "arrow"], ["id", "products", 1, "sub-menu", "collapse", "active"], ["routerLink", "/super-admin", "routerLinkActive", "active"], ["href", "/managers"], ["href", "/pf"], ["data-toggle", "collapse", "data-target", "#service", 1, "collapsed"], ["id", "service", 1, "sub-menu", "collapse"], ["data-toggle", "collapse", "data-target", "#new", 1, "collapsed"], [1, "fa", "fa-car", "fa-lg"], ["id", "new", 1, "sub-menu", "collapse"], [1, "fa", "fa-user", "fa-lg"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CHOOHOO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Super Admins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Managers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Players");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Resellers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Game Units ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Trendmonitoring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Alarmmonitoring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Audit-Trail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Reporting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Alarmstatistik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Prozessf\u00E4higkeit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sensorkonfiguration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Betriebsarten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@import 'https://fonts.googleapis.com/css?family=Raleway:300,400';\n\n\nbody[_ngcontent-%COMP%] {\n    font-family: 'Raleway:300', sans-serif\n}\n\n\n.admin-sidenav[_ngcontent-%COMP%] {\n    width: auto;\n\theight: auto;\n\tmargin-left: 0px; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\ttext-decoration: none; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\ttext-align: justify;\n\tpadding: .5rem;\n\tpadding-left: 1rem;\n\ttransition: all .2s linear;\n\tbackground-color: #000;\n\tborder: 1px solid #333; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n\tborder-radius: 0 .5rem .5rem 0;\n\tborder-color: #02d3f5;\n\ttransform: translate(30px, 0px);\n\tbackground: linear-gradient(to right, #006a7b, #002340); \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUVBQWlFOzs7QUFHakU7SUFDSTtBQUNKOzs7QUFFQTtJQUNJLFdBQVc7Q0FDZCxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOzs7QUFDQTtDQUNDLHFCQUFxQjtBQUN0Qjs7O0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGtCQUFrQjtDQUVsQiwwQkFBMEI7Q0FDMUIsc0JBQXNCO0NBQ3RCLHNCQUFzQjtBQUN2Qjs7O0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7OztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOzs7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QixxQkFBcUI7Q0FFckIsK0JBQStCO0NBRS9CLHVEQUF1RDtBQUN4RDs7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjMwMCw0MDAnO1xuXG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheTozMDAnLCBzYW5zLXNlcmlmXG59XG4gICAgXG4uYWRtaW4tc2lkZW5hdiB7XG4gICAgd2lkdGg6IGF1dG87XG5cdGhlaWdodDogYXV0bztcblx0bWFyZ2luLWxlZnQ6IDBweDsgXG59XG4uYWRtaW4tc2lkZW5hdiBhIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lOyBcbn1cbi5hZG1pbi1zaWRlbmF2IGxpIHtcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcblx0cGFkZGluZzogLjVyZW07XG5cdHBhZGRpbmctbGVmdDogMXJlbTtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcblx0dHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMzM7IFxufVxuLmFkbWluLXNpZGVuYXYgbGkgYSB7XG5cdGNvbG9yOiAjZmZmOyBcbn1cblxuLmFkbWluLXNpZGVuYXYgbGkgYTphY3RpdmUge1xuXHRib3JkZXItY29sb3I6ICMwMmQzZjU7IFxufVxuXG4uYWRtaW4tc2lkZW5hdiBsaTpob3ZlciB7XG5cdGJvcmRlci1yYWRpdXM6IDAgLjVyZW0gLjVyZW0gMDtcblx0Ym9yZGVyLWNvbG9yOiAjMDJkM2Y1O1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMwMDZhN2IsICMwMDIzNDApO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDZhN2IsICMwMDIzNDApOyBcbn1cblxuLmFkbWluLXNpZGVuYXYgbGk6YWN0aXZlIHtcblx0Ym9yZGVyLWNvbG9yOiAjMDJkM2Y1OyBcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/my-profile/my-profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.ts ***!
  \****************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function MyProfileComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, "");
} }
function MyProfileComponent_button_91_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyProfileComponent_button_91_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.Buy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Buy Game Units");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyProfileComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BUY GAME UNITS FOR RESELLER CASH SALES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Price Per Game Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyProfileComponent_div_94_Template_input_ngModelChange_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.somethingChanged(); })("ngModelChange", function MyProfileComponent_div_94_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.number = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyProfileComponent_div_94_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.dontBuy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R", ctx_r2.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R", ctx_r2.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total R", ctx_r2.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total R", ctx_r2.total, "");
} }
const _c0 = function (a1) { return ["/byr", a1]; };
class MyProfileComponent {
    constructor(router, Api, localStorageService) {
        this.router = router;
        this.Api = Api;
        this.localStorageService = localStorageService;
        this.errorMessage = "";
        this.username = "";
        this.showbuy = false;
        this.buybtn = false;
        this.showme = false;
        this.addScript = false;
        this.paypalLoad = true;
        this.loading = true;
        this.finalAmount = 1;
        this.total = 0;
        this.showSuccess = false;
        this.details = { ResellerID: '', Name: '', AdminStatus: '', Type: "", units: "" };
        this.didPaypalScriptLoad = false;
        this.paypal = { Type: "",
            Name: "",
            Surname: "",
            Email: "",
            method: "",
            units: "",
            Country: "",
            transcationID: "",
            price: "",
            ResellerID: "", };
        // paypalConfig = {
        //   env: 'sandbox',
        //   client: {
        //     sandbox: 'AUKqx7if_vqq7enbgMGt-gYvrtdGnMjQh8_uq69HUrtOmIAOsoGmdVVlchQ-34zBI-0L5oSQ2UhvZCJX',
        //   },
        //   commit: true,
        //   payment: (data, actions) => {
        //     return actions.payment.create({
        //       payment: {
        //         transactions: [
        //           { amount: { total: this.total, currency: 'USD' } }
        //         ]
        //       }
        //     });
        //   },
        //   onAuthorize: (data, actions) => {
        //     return actions.payment.execute().then((payment) => {
        //       //Do something when payment is successful.
        //       if(payment.id){
        //         console.log(payment);
        //         this.paypal.ResellerID =this.details.ResellerID
        //       this.paypal.Type="paypal"
        //       this.paypal.Name =payment.payer.payer_info.first_name
        //       this.paypal.Surname =payment.payer.payer_info.last_name
        //       this.paypal.Email =payment.payer.payer_info.email
        //       this.paypal.method ="paypal";
        //       this.paypal.units  =this.total.toString();
        //       this.paypal.Country =payment.payer.payer_info.country_code;
        //       this.paypal.transcationID = payment.id;
        //       this.paypal.price  =this.total.toString();
        //      this.buy();
        //       }
        //     })
        //   }
        // };
        // public ngAfterViewChecked(): void {
        //   if(!this.didPaypalScriptLoad) {
        //     this.loadPaypalScript().then(() => {
        //       paypal.Button.render(this.paypalConfig, '#paypal-button');
        //       this.loading = false;
        //     });
        //   }
        // }
        // public loadPaypalScript(): Promise<any> {
        //   this.didPaypalScriptLoad = true;
        //   return new Promise((resolve, reject) => {
        //     const scriptElement = document.createElement('script');
        //     scriptElement.src = 'https://www.paypalobjects.com/api/checkout.js';
        //     scriptElement.onload = resolve;
        //     document.body.appendChild(scriptElement);
        //   });
        // }
        this.paypalConfig = {
            env: 'sandbox',
            client: {
                sandbox: 'AUKqx7if_vqq7enbgMGt-gYvrtdGnMjQh8_uq69HUrtOmIAOsoGmdVVlchQ-34zBI-0L5oSQ2UhvZCJX',
            },
            commit: true,
            payment: (data, actions) => {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            { amount: { total: this.total, currency: 'USD' } }
                        ]
                    }
                });
            },
            onAuthorize: (data, actions) => {
                return actions.payment.execute().then((payment) => {
                    if (payment.id) {
                        console.log(payment);
                        this.paypal.ResellerID = this.details.ResellerID;
                        this.paypal.Type = "paypal";
                        this.paypal.Name = payment.payer.payer_info.first_name;
                        this.paypal.Surname = payment.payer.payer_info.last_name;
                        this.paypal.Email = payment.payer.payer_info.email;
                        this.paypal.method = "paypal";
                        this.paypal.units = this.total.toString();
                        this.paypal.Country = payment.payer.payer_info.country_code;
                        this.paypal.transcationID = payment.id;
                        this.paypal.price = this.total.toString();
                        this.buy();
                    }
                });
            }
        };
    }
    ngOnInit() {
        this.getME();
    }
    getME() {
        this.errorMessage = "";
        this.username = this.localStorageService.get('ID');
        this.Api.findme(this.username).subscribe(response => {
            if (response.message == "notfound") {
                this.errorMessage = "You have no Reseller Profile";
            }
            if (response) {
                this.details.ResellerID = response.person.ResellerID;
                this.details.Name = response.person.Name;
                this.details.AdminStatus = response.person.ApplicationStatus;
                this.details.units = response.person.units;
                if (this.details.AdminStatus === "0") {
                    this.details.AdminStatus = "Pending";
                    this.buybtn = false;
                }
                if (this.details.AdminStatus === "Approved") {
                    this.buybtn = true;
                }
                this.details.Type = response.person.Type;
            }
        }, error => {
            if (error.status == "401") {
                this.errorMessage = "Incorrect Verification Code";
            }
            if (error.status == "0") {
                this.errorMessage = "Service Unavaliable";
            }
        });
    }
    Buy() {
        this.showbuy = true;
        this.getprice();
    }
    dontBuy() {
        this.showbuy = false;
        this.total = 0;
        this.price = 0;
        this.number = 0;
    }
    getprice() {
        this.Api.getPrice().subscribe(response => {
            if (response) {
                this.ItemsArray = response.users;
                this.price = this.ItemsArray[0].price;
            }
        }, error => {
            if (error.status == "401") {
                this.errorMessage = "Incorrect Verification Code";
            }
            if (error.status == "0") {
                this.errorMessage = "Service Unavaliable";
            }
        });
    }
    somethingChanged() {
        this.total = this.price * this.number;
        if (!this.didPaypalScriptLoad) {
            this.loadPaypalScript().then(() => {
                paypal.Button.render(this.paypalConfig, '#paypal-button');
                this.loading = false;
            });
        }
    }
    ngAfterViewChecked() {
    }
    loadPaypalScript() {
        this.didPaypalScriptLoad = true;
        return new Promise((resolve, reject) => {
            const scriptElement = document.createElement('script');
            scriptElement.src = 'https://www.paypalobjects.com/api/checkout.js';
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        });
    }
    buy() {
        this.errorMessage = "";
        this.username = this.localStorageService.get('ID');
        this.Api.buyUnits(this.paypal).subscribe(response => {
            console.log(response.message);
            if (response.message == "created") {
                this.errorMessage = "You have Successfuly purchased " + this.total + "GAME UNITS";
                this.ItemsArray = '';
                location.reload();
            }
        }, error => {
            if (error.status == "401") {
                this.errorMessage = "Incorrect Verification Code";
            }
            if (error.status == "0") {
                this.errorMessage = "Service Unavaliable";
            }
        });
    }
    logout() {
        this.localStorageService.clearAll();
        this.router.navigate(['/login']);
    }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"])); };
MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 95, vars: 11, consts: [[1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "container-fluid", 2, "margin-right", "20%"], [1, "row"], ["id", "admin-sidebar", 1, "col-md-2", "p-x-0", "p-y-3"], [1, "sidenav", "admin-sidenav", "list-unstyled"], ["routerLink", "/rs", "routerLinkActive", "active"], ["routerLink", "/pf"], ["routerLink", "/hr"], ["routerLink", "/payments"], [3, "click"], ["href", "#"], ["id", "admin-main-control", 1, "col-md-10", "p-x-3", "p-y-1"], ["class", "alert alert-success", 4, "ngIf"], [1, "container"], [1, "span5"], [1, "table", "table-striped", "table-condensed"], ["type", "submit", "class", "btn btn-black", 3, "click", 4, "ngIf"], [3, "routerLink"], ["class", "container", 4, "ngIf"], [1, "alert", "alert-success"], ["type", "submit", 1, "btn", "btn-black", 3, "click"], ["id", "cart", 1, "table", "table-hover", "table-condensed"], [2, "width", "50%"], [2, "width", "10%"], [2, "width", "8%"], [1, "text-center", 2, "width", "22%"], ["data-th", "Product"], [1, "col-sm-2", "hidden-xs"], ["src", "assets/log.jpg", "alt", "...", "height", "80", 1, "img-responsive"], [1, "col-sm-10"], ["data-th", "Price"], ["data-th", "Quantity"], ["type", "number", "value", "0", 1, "form-control", "text-center", 3, "ngModel", "ngModelChange"], ["data-th", "Subtotal", 1, "text-center"], ["data-th", "", 1, "actions"], [1, "btn", "btn-info", "btn-sm"], [1, "fa", "fa-refresh"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fa", "fa-trash-o"], [1, "visible-xs"], [1, "text-center"], ["id", "paypal-button"], ["colspan", "2", 1, "hidden-xs"], [1, "hidden-xs", "text-center"]], template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CHOOHOO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Become Reseller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reseller Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Transcations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyProfileComponent_Template_li_click_22_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "LOGOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, MyProfileComponent_div_62_Template, 3, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "ResellerID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, MyProfileComponent_button_91_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " share ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, MyProfileComponent_div_94_Template, 43, 5, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.ResellerID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.AdminStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buybtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.details.ResellerID));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showbuy);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["@import 'https://fonts.googleapis.com/css?family=Raleway:300,400';\n\n\nbody[_ngcontent-%COMP%] {\n    font-family: 'Raleway:300', sans-serif\n}\n\n\n.admin-sidenav[_ngcontent-%COMP%] {\n    width: auto;\n\theight: auto;\n\tmargin-left: 0px; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\ttext-decoration: none; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\ttext-align: justify;\n\tpadding: .5rem;\n\tpadding-left: 1rem;\n\ttransition: all .2s linear;\n\tbackground-color: #000;\n\tborder: 1px solid #333; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n\tborder-radius: 0 .5rem .5rem 0;\n\tborder-color: #02d3f5;\n\ttransform: translate(30px, 0px);\n\tbackground: linear-gradient(to right, #006a7b, #002340); \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n\n\n.login-main-text[_ngcontent-%COMP%]{\n    margin-top: 20%;\n    padding: 60px;\n    color: #fff;\n}\n\n\n.login-main-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    font-weight: 300;\n}\n\n\n.btn-black[_ngcontent-%COMP%]{\n    background-color: #000 !important;\n    color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUVBQWlFOzs7QUFHakU7SUFDSTtBQUNKOzs7QUFFQTtJQUNJLFdBQVc7Q0FDZCxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOzs7QUFDQTtDQUNDLHFCQUFxQjtBQUN0Qjs7O0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGtCQUFrQjtDQUVsQiwwQkFBMEI7Q0FDMUIsc0JBQXNCO0NBQ3RCLHNCQUFzQjtBQUN2Qjs7O0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7OztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOzs7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QixxQkFBcUI7Q0FFckIsK0JBQStCO0NBRS9CLHVEQUF1RDtBQUN4RDs7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjMwMCw0MDAnO1xuXG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheTozMDAnLCBzYW5zLXNlcmlmXG59XG4gICAgXG4uYWRtaW4tc2lkZW5hdiB7XG4gICAgd2lkdGg6IGF1dG87XG5cdGhlaWdodDogYXV0bztcblx0bWFyZ2luLWxlZnQ6IDBweDsgXG59XG4uYWRtaW4tc2lkZW5hdiBhIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lOyBcbn1cbi5hZG1pbi1zaWRlbmF2IGxpIHtcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcblx0cGFkZGluZzogLjVyZW07XG5cdHBhZGRpbmctbGVmdDogMXJlbTtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcblx0dHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMzM7IFxufVxuLmFkbWluLXNpZGVuYXYgbGkgYSB7XG5cdGNvbG9yOiAjZmZmOyBcbn1cblxuLmFkbWluLXNpZGVuYXYgbGkgYTphY3RpdmUge1xuXHRib3JkZXItY29sb3I6ICMwMmQzZjU7IFxufVxuXG4uYWRtaW4tc2lkZW5hdiBsaTpob3ZlciB7XG5cdGJvcmRlci1yYWRpdXM6IDAgLjVyZW0gLjVyZW0gMDtcblx0Ym9yZGVyLWNvbG9yOiAjMDJkM2Y1O1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMwMDZhN2IsICMwMDIzNDApO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDZhN2IsICMwMDIzNDApOyBcbn1cblxuLmFkbWluLXNpZGVuYXYgbGk6YWN0aXZlIHtcblx0Ym9yZGVyLWNvbG9yOiAjMDJkM2Y1OyBcbn1cblxuXG4ubG9naW4tbWFpbi10ZXh0e1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBwYWRkaW5nOiA2MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubG9naW4tbWFpbi10ZXh0IGgye1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5idG4tYmxhY2t7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-profile',
                templateUrl: './my-profile.component.html',
                styleUrls: ['./my-profile.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/payments/payments.component.ts":
/*!************************************************!*\
  !*** ./src/app/payments/payments.component.ts ***!
  \************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function PaymentsComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, "");
} }
function PaymentsComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.pf_payment_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.item_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.payment_status);
} }
class PaymentsComponent {
    constructor(router, Api, localStorageService) {
        this.router = router;
        this.Api = Api;
        this.localStorageService = localStorageService;
    }
    ngOnInit() {
        this.ResellerId = this.localStorageService.get('ResellerID');
        this.getResellerPayments();
    }
    getResellerPayments() {
        this.Api.getResellerPayments(this.ResellerId).subscribe(response => {
            if (response) {
                console.log(response);
            }
            this.ItemsArray = response.person;
            if (this.ItemsArray.length < 1) {
                this.errorMessage = 'You have no payments yet';
            }
        }, error => {
            console.log(error);
        });
    }
    logout() {
        this.localStorageService.clearAll();
        this.router.navigate(['/login']);
    }
}
PaymentsComponent.ɵfac = function PaymentsComponent_Factory(t) { return new (t || PaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"])); };
PaymentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentsComponent, selectors: [["app-payments"]], decls: 75, vars: 2, consts: [[1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "container-fluid", 2, "margin-right", "20%"], [1, "row"], ["id", "admin-sidebar", 1, "col-md-2", "p-x-0", "p-y-3"], [1, "sidenav", "admin-sidenav", "list-unstyled"], ["routerLink", "/rs", "routerLinkActive", "active"], ["routerLink", "/pf"], ["routerLink", "/hr"], ["routerLink", "/payments"], [3, "click"], ["href", "#"], ["id", "admin-main-control", 1, "col-md-10", "p-x-3", "p-y-1"], ["class", "alert alert-success", 4, "ngIf"], [1, "container"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "alert", "alert-success"]], template: function PaymentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CHOOHOO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Become Reseller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reseller Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Transcations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_Template_li_click_22_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "LOGOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, PaymentsComponent_div_62_Template, 3, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "PaymentID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Game Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, PaymentsComponent_tr_74_Template, 7, 3, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ItemsArray);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\n@media(min-width:768px) {\n    body[_ngcontent-%COMP%] {\n        margin-top: 50px;\n    }\n    \n}\n#wrapper[_ngcontent-%COMP%] {\n    padding-left: 0;    \n}\n#page-wrapper[_ngcontent-%COMP%] {\n    width: 100%;        \n    padding: 0;\n    background-color: #fff;\n}\n@media(min-width:768px) {\n    #wrapper[_ngcontent-%COMP%] {\n        padding-left: 225px;\n    }\n\n    #page-wrapper[_ngcontent-%COMP%] {\n        padding: 22px 10px;\n    }\n}\n\n.top-nav[_ngcontent-%COMP%] {\n    padding: 0 15px;\n}\n.top-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n    display: inline-block;\n    float: left;\n}\n.top-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    line-height: 20px;\n    color: #fff;\n}\n.top-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .top-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .top-nav[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .top-nav[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .top-nav[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus {\n    color: #fff;\n    background-color: #1a242f;\n}\n.top-nav[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] > .dropdown-menu[_ngcontent-%COMP%] {\n    float: left;\n    position: absolute;\n    margin-top: 0;\n    \n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    background-color: #fff;\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\n}\n.top-nav[_ngcontent-%COMP%] > .open[_ngcontent-%COMP%] > .dropdown-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n    white-space: normal;\n}\n\n@media(min-width:768px) {\n    .side-nav[_ngcontent-%COMP%] {\n        position: fixed;\n        top: 60px;\n        left: 225px;\n        width: 225px;\n        margin-left: -225px;\n        border: none;\n        border-radius: 0;\n        border-top: 1px rgba(0,0,0,.5) solid;\n        overflow-y: auto;\n        background-color: #222;\n        \n        bottom: 0;\n        overflow-x: hidden;\n        padding-bottom: 40px;\n    }\n\n    .side-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n        width: 225px;\n        border-bottom: 1px rgba(0,0,0,.3) solid;\n    }\n\n    .side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n        outline: none;\n        background-color: #1a242f !important;\n    }\n}\n.side-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] {\n    padding: 0;\n    border-bottom: 1px rgba(0,0,0,.3) solid;\n}\n.side-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n    display: block;\n    padding: 10px 15px 10px 38px;\n    text-decoration: none;\n    \n    color: #fff;    \n}\n.side-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\n    color: #fff;\n}\n.navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .label[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  position: absolute;\n  top: 14px;\n  right: 6px;\n  font-size: 10px;\n  font-weight: normal;\n  min-width: 15px;\n  min-height: 15px;\n  line-height: 1.0em;\n  text-align: center;\n  padding: 2px;\n}\n.navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover    > .label[_ngcontent-%COMP%] {\n  top: 10px;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n    padding: 5px 15px;\n}\n#custom-search-input[_ngcontent-%COMP%] {\n    margin:0;\n    margin-top: 10px;\n    padding: 0;\n}\n#custom-search-input[_ngcontent-%COMP%]   .search-query[_ngcontent-%COMP%] {\n    padding-right: 3px;\n    padding-right: 4px \\9;\n    padding-left: 3px;\n    padding-left: 4px \\9;\n    \n\n    margin-bottom: 0;\n    border-radius: 3px;\n}\n#custom-search-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border: 0;\n    background: none;\n    \n    padding: 2px 5px;\n    margin-top: 2px;\n    position: relative;\n    left: -28px;\n    \n    margin-bottom: 0;\n    border-radius: 3px;\n    color:#D9230F;\n}\n.search-query[_ngcontent-%COMP%]:focus    + button[_ngcontent-%COMP%] {\n    z-index: 3;   \n}\nbody[_ngcontent-%COMP%] {\n    font-family: \"Lato\", sans-serif;\n}\n.main-head[_ngcontent-%COMP%]{\n    height: 150px;\n    background: #FFF;\n   \n}\n.sidenav[_ngcontent-%COMP%] {\n    height: 100%;\n    background-color: #000;\n    overflow-x: hidden;\n    padding-top: 20px;\n}\n.main[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n}\n@media screen and (max-height: 450px) {\n    .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\n}\n@media screen and (max-width: 450px) {\n    .login-form[_ngcontent-%COMP%]{\n        margin-top: 10%;\n    }\n\n    .register-form[_ngcontent-%COMP%]{\n        margin-top: 10%;\n    }\n}\n@media screen and (min-width: 768px){\n    .main[_ngcontent-%COMP%]{\n        margin-left: 40%; \n    }\n\n    .sidenav[_ngcontent-%COMP%]{\n        width: 40%;\n        position: fixed;\n        z-index: 1;\n        top: 0;\n        left: 0;\n    }\n\n    .login-form[_ngcontent-%COMP%]{\n        margin-top: 80%;\n    }\n\n    .register-form[_ngcontent-%COMP%]{\n        margin-top: 20%;\n    }\n}\n.login-main-text[_ngcontent-%COMP%]{\n    margin-top: 20%;\n    padding: 60px;\n    color: #fff;\n}\n.login-main-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    font-weight: 300;\n}\n.btn-black[_ngcontent-%COMP%]{\n    background-color: #000 !important;\n    color: #fff;\n}\n.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{\n    vertical-align: middle;\n}\n@media screen and (max-width: 600px) {\n    table#cart[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{\n\t\twidth:20%;\n\t\tdisplay: inline !important;\n\t}\n\t.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\n\t\twidth:36%;\n\t\tmargin:1.5em 0;\n\t}\n\t\n\t.actions[_ngcontent-%COMP%]   .btn-info[_ngcontent-%COMP%]{\n\t\tfloat:left;\n\t}\n\t.actions[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]{\n\t\tfloat:right;\n\t}\n\t\n\ttable#cart[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] { display: none; }\n\ttable#cart[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { display: block; padding: .6rem; min-width:320px;}\n\ttable#cart[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child { background: #333; color: #fff; }\n\ttable#cart[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n\t\tcontent: attr(data-th); font-weight: bold;\n\t\tdisplay: inline-block; width: 8rem;\n\t}\n\t\n\t\n\t\n\ttable#cart[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:block; }\n\ttable#cart[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{display:block;}\n\t\n}\nbody[_ngcontent-%COMP%] {\n    font-family: 'Raleway:300', sans-serif\n}\n.admin-sidenav[_ngcontent-%COMP%] {\n    width: auto;\n\theight: auto;\n\tmargin-left: 0px; \n}\n.admin-sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\ttext-decoration: none; \n}\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\ttext-align: justify;\n\tpadding: .5rem;\n\tpadding-left: 1rem;\n\ttransition: all .2s linear;\n\tbackground-color: #000;\n\tborder: 1px solid #333; \n}\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff; \n}\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n\tborder-radius: 0 .5rem .5rem 0;\n\tborder-color: #02d3f5;\n\ttransform: translate(30px, 0px);\n\tbackground: linear-gradient(to right, #006a7b, #002340); \n}\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBLHdFQUF3RTtBQUM1RTtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7QUFFQSxtQkFBbUI7QUFFbkI7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFFQTs7Ozs7SUFLSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFFdEIsdUNBQXVDO0FBQzNDO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQSxvQkFBb0I7QUFFcEI7SUFDSTtRQUNJLGVBQWU7UUFDZixTQUFTO1FBQ1QsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixvQ0FBb0M7UUFDcEMsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsU0FBUztRQUNULGtCQUFrQjtRQUNsQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osdUNBQXVDO0lBQzNDOztJQUVBOztRQUVJLGFBQWE7UUFDYixvQ0FBb0M7SUFDeEM7QUFDSjtBQUVBO0lBQ0ksVUFBVTtJQUNWLHVDQUF1QztBQUMzQztBQUVBO0lBQ0ksY0FBYztJQUNkLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7RUFHRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUdBO0lBQ0ksUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrRUFBa0U7O0lBRWxFLGdCQUFnQjtJQUdoQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrRUFBa0U7SUFDbEUsZ0JBQWdCO0lBR2hCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUlBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjs7QUFFcEI7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUdBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxVQUFVLGlCQUFpQixDQUFDO0FBQ2hDO0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7UUFDZixVQUFVO1FBQ1YsTUFBTTtRQUNOLE9BQU87SUFDWDs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFHQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0k7RUFDRixTQUFTO0VBQ1QsMEJBQTBCO0NBQzNCO0NBQ0E7RUFDQyxTQUFTO0VBQ1QsY0FBYztDQUNmOztDQUVBO0VBQ0MsVUFBVTtDQUNYO0NBQ0E7RUFDQyxXQUFXO0NBQ1o7O0NBRUEsbUJBQW1CLGFBQWEsRUFBRTtDQUNsQyxzQkFBc0IsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUM7Q0FDdEUscUNBQXFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRTtDQUNwRTtFQUNDLHNCQUFzQixFQUFFLGlCQUFpQjtFQUN6QyxxQkFBcUIsRUFBRSxXQUFXO0NBQ25DOzs7O0NBSUEsb0JBQW9CLGFBQWEsRUFBRTtDQUNuQyx5QkFBeUIsYUFBYSxDQUFDOztBQUV4QztBQVFBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksV0FBVztDQUNkLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxrQkFBa0I7Q0FFbEIsMEJBQTBCO0NBQzFCLHNCQUFzQjtDQUN0QixzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIscUJBQXFCO0NBRXJCLCtCQUErQjtDQUUvQix1REFBdUQ7QUFDeEQ7QUFFQTtDQUNDLHFCQUFxQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4zLjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XG5AbWVkaWEobWluLXdpZHRoOjc2OHB4KSB7XG4gICAgYm9keSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuICAgIC8qaHRtbCwgYm9keSwgI3dyYXBwZXIsICNwYWdlLXdyYXBwZXIge2hlaWdodDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjt9Ki9cbn1cblxuI3dyYXBwZXIge1xuICAgIHBhZGRpbmctbGVmdDogMDsgICAgXG59XG5cbiNwYWdlLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlOyAgICAgICAgXG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEobWluLXdpZHRoOjc2OHB4KSB7XG4gICAgI3dyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIyNXB4O1xuICAgIH1cblxuICAgICNwYWdlLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiAyMnB4IDEwcHg7XG4gICAgfVxufVxuXG4vKiBUb3AgTmF2aWdhdGlvbiAqL1xuXG4udG9wLW5hdiB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4udG9wLW5hdj5saSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udG9wLW5hdj5saT5hIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnRvcC1uYXY+bGk+YTpob3Zlcixcbi50b3AtbmF2PmxpPmE6Zm9jdXMsXG4udG9wLW5hdj4ub3Blbj5hLFxuLnRvcC1uYXY+Lm9wZW4+YTpob3Zlcixcbi50b3AtbmF2Pi5vcGVuPmE6Zm9jdXMge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTI0MmY7XG59XG5cbi50b3AtbmF2Pi5vcGVuPi5kcm9wZG93bi1tZW51IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE1KTsqL1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KTtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7XG59XG5cbi50b3AtbmF2Pi5vcGVuPi5kcm9wZG93bi1tZW51PmxpPmEge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi8qIFNpZGUgTmF2aWdhdGlvbiAqL1xuXG5AbWVkaWEobWluLXdpZHRoOjc2OHB4KSB7XG4gICAgLnNpZGUtbmF2IHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDYwcHg7XG4gICAgICAgIGxlZnQ6IDIyNXB4O1xuICAgICAgICB3aWR0aDogMjI1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjI1cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwwLDAsLjUpIHNvbGlkO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgICAgICAvKmJhY2tncm91bmQtY29sb3I6ICM1QTZCN0Q7Ki9cbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIH1cblxuICAgIC5zaWRlLW5hdj5saT5hIHtcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XG4gICAgfVxuXG4gICAgLnNpZGUtbmF2IGxpIGE6aG92ZXIsXG4gICAgLnNpZGUtbmF2IGxpIGE6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEyNDJmICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uc2lkZS1uYXY+bGk+dWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwwLDAsLjMpIHNvbGlkO1xufVxuXG4uc2lkZS1uYXY+bGk+dWw+bGk+YSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMzhweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLypjb2xvcjogIzk5OTsqL1xuICAgIGNvbG9yOiAjZmZmOyAgICBcbn1cblxuLnNpZGUtbmF2PmxpPnVsPmxpPmE6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyIC5uYXYgPiBsaSA+IGEgPiAubGFiZWwge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIHJpZ2h0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWluLXdpZHRoOiAxNXB4O1xuICBtaW4taGVpZ2h0OiAxNXB4O1xuICBsaW5lLWhlaWdodDogMS4wZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4ubmF2YmFyIC5uYXYgPiBsaSA+IGE6aG92ZXIgPiAubGFiZWwge1xuICB0b3A6IDEwcHg7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuXG5cbiNjdXN0b20tc2VhcmNoLWlucHV0IHtcbiAgICBtYXJnaW46MDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbiNjdXN0b20tc2VhcmNoLWlucHV0IC5zZWFyY2gtcXVlcnkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHggXFw5O1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctbGVmdDogNHB4IFxcOTtcbiAgICAvKiBJRTctOCBkb2Vzbid0IGhhdmUgYm9yZGVyLXJhZGl1cywgc28gZG9uJ3QgaW5kZW50IHRoZSBwYWRkaW5nICovXG5cbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuI2N1c3RvbS1zZWFyY2gtaW5wdXQgYnV0dG9uIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAvKiogYmVsb3dzIHN0eWxlcyBhcmUgd29ya2luZyBnb29kICovXG4gICAgcGFkZGluZzogMnB4IDVweDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0yOHB4O1xuICAgIC8qIElFNy04IGRvZXNuJ3QgaGF2ZSBib3JkZXItcmFkaXVzLCBzbyBkb24ndCBpbmRlbnQgdGhlIHBhZGRpbmcgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBjb2xvcjojRDkyMzBGO1xufVxuXG4uc2VhcmNoLXF1ZXJ5OmZvY3VzICsgYnV0dG9uIHtcbiAgICB6LWluZGV4OiAzOyAgIFxufVxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5cblxuLm1haW4taGVhZHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICBcbn1cblxuLnNpZGVuYXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuXG4ubWFpbiB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAgIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgLmxvZ2luLWZvcm17XG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB9XG5cbiAgICAucmVnaXN0ZXItZm9ybXtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xuICAgIC5tYWlue1xuICAgICAgICBtYXJnaW4tbGVmdDogNDAlOyBcbiAgICB9XG5cbiAgICAuc2lkZW5hdntcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmxvZ2luLWZvcm17XG4gICAgICAgIG1hcmdpbi10b3A6IDgwJTtcbiAgICB9XG5cbiAgICAucmVnaXN0ZXItZm9ybXtcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIH1cbn1cblxuXG4ubG9naW4tbWFpbi10ZXh0e1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBwYWRkaW5nOiA2MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubG9naW4tbWFpbi10ZXh0IGgye1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5idG4tYmxhY2t7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLnRhYmxlPnRib2R5PnRyPnRkLCAudGFibGU+dGZvb3Q+dHI+dGR7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgdGFibGUjY2FydCB0Ym9keSB0ZCAuZm9ybS1jb250cm9se1xuXHRcdHdpZHRoOjIwJTtcblx0XHRkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcblx0fVxuXHQuYWN0aW9ucyAuYnRue1xuXHRcdHdpZHRoOjM2JTtcblx0XHRtYXJnaW46MS41ZW0gMDtcblx0fVxuXHRcblx0LmFjdGlvbnMgLmJ0bi1pbmZve1xuXHRcdGZsb2F0OmxlZnQ7XG5cdH1cblx0LmFjdGlvbnMgLmJ0bi1kYW5nZXJ7XG5cdFx0ZmxvYXQ6cmlnaHQ7XG5cdH1cblx0XG5cdHRhYmxlI2NhcnQgdGhlYWQgeyBkaXNwbGF5OiBub25lOyB9XG5cdHRhYmxlI2NhcnQgdGJvZHkgdGQgeyBkaXNwbGF5OiBibG9jazsgcGFkZGluZzogLjZyZW07IG1pbi13aWR0aDozMjBweDt9XG5cdHRhYmxlI2NhcnQgdGJvZHkgdHIgdGQ6Zmlyc3QtY2hpbGQgeyBiYWNrZ3JvdW5kOiAjMzMzOyBjb2xvcjogI2ZmZjsgfVxuXHR0YWJsZSNjYXJ0IHRib2R5IHRkOmJlZm9yZSB7XG5cdFx0Y29udGVudDogYXR0cihkYXRhLXRoKTsgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogOHJlbTtcblx0fVxuXHRcblx0XG5cdFxuXHR0YWJsZSNjYXJ0IHRmb290IHRke2Rpc3BsYXk6YmxvY2s7IH1cblx0dGFibGUjY2FydCB0Zm9vdCB0ZCAuYnRue2Rpc3BsYXk6YmxvY2s7fVxuXHRcbn1cblxuXG5cblxuQGltcG9ydCAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MzAwLDQwMCc7XG5cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5OjMwMCcsIHNhbnMtc2VyaWZcbn1cbiAgICBcbi5hZG1pbi1zaWRlbmF2IHtcbiAgICB3aWR0aDogYXV0bztcblx0aGVpZ2h0OiBhdXRvO1xuXHRtYXJnaW4tbGVmdDogMHB4OyBcbn1cbi5hZG1pbi1zaWRlbmF2IGEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxufVxuLmFkbWluLXNpZGVuYXYgbGkge1xuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXHRwYWRkaW5nOiAuNXJlbTtcblx0cGFkZGluZy1sZWZ0OiAxcmVtO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuXHR0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDtcblx0Ym9yZGVyOiAxcHggc29saWQgIzMzMzsgXG59XG4uYWRtaW4tc2lkZW5hdiBsaSBhIHtcblx0Y29sb3I6ICNmZmY7IFxufVxuXG4uYWRtaW4tc2lkZW5hdiBsaSBhOmFjdGl2ZSB7XG5cdGJvcmRlci1jb2xvcjogIzAyZDNmNTsgXG59XG5cbi5hZG1pbi1zaWRlbmF2IGxpOmhvdmVyIHtcblx0Ym9yZGVyLXJhZGl1czogMCAuNXJlbSAuNXJlbSAwO1xuXHRib3JkZXItY29sb3I6ICMwMmQzZjU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzAwNmE3YiwgIzAwMjM0MCk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNmE3YiwgIzAwMjM0MCk7IFxufVxuXG4uYWRtaW4tc2lkZW5hdiBsaTphY3RpdmUge1xuXHRib3JkZXItY29sb3I6ICMwMmQzZjU7IFxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payments',
                templateUrl: './payments.component.html',
                styleUrls: ['./payments.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






class PlayerComponent {
    constructor(router, Api, localStorageService) {
        this.router = router;
        this.Api = Api;
        this.localStorageService = localStorageService;
    }
    ngOnInit() {
    }
    logout() {
        this.localStorageService.clearAll();
        this.router.navigate(['/login']);
    }
}
PlayerComponent.ɵfac = function PlayerComponent_Factory(t) { return new (t || PlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"])); };
PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerComponent, selectors: [["app-player"]], decls: 63, vars: 0, consts: [[1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "container-fluid", 2, "margin-right", "20%"], [1, "row"], ["id", "admin-sidebar", 1, "col-md-2", "p-x-0", "p-y-3"], [1, "sidenav", "admin-sidenav", "list-unstyled"], ["routerLink", "/rs", "routerLinkActive", "active"], ["routerLink", "/pf"], ["routerLink", "/hr"], ["routerLink", "/payments"], [3, "click"], ["href", "#"], ["id", "admin-main-control", 1, "col-md-10", "p-x-3", "p-y-1"]], template: function PlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CHOOHOO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Become Reseller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reseller Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Transcations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_li_click_22_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "LOGOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@import 'https://fonts.googleapis.com/css?family=Raleway:300,400';\n\n\nbody[_ngcontent-%COMP%] {\n    font-family: 'Raleway:300', sans-serif\n}\n\n\n.admin-sidenav[_ngcontent-%COMP%] {\n    width: auto;\n\theight: auto;\n\tmargin-left: 0px; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\ttext-decoration: none; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\ttext-align: justify;\n\tpadding: .5rem;\n\tpadding-left: 1rem;\n\ttransition: all .2s linear;\n\tbackground-color: #000;\n\tborder: 1px solid #333; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n\tborder-radius: 0 .5rem .5rem 0;\n\tborder-color: #02d3f5;\n\ttransform: translate(30px, 0px);\n\tbackground: linear-gradient(to right, #006a7b, #002340); \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlFQUFpRTs7O0FBR2pFO0lBQ0k7QUFDSjs7O0FBRUE7SUFDSSxXQUFXO0NBQ2QsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7O0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7OztBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxrQkFBa0I7Q0FFbEIsMEJBQTBCO0NBQzFCLHNCQUFzQjtDQUN0QixzQkFBc0I7QUFDdkI7OztBQUNBO0NBQ0MsV0FBVztBQUNaOzs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIscUJBQXFCO0NBRXJCLCtCQUErQjtDQUUvQix1REFBdUQ7QUFDeEQ7OztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MzAwLDQwMCc7XG5cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5OjMwMCcsIHNhbnMtc2VyaWZcbn1cbiAgICBcbi5hZG1pbi1zaWRlbmF2IHtcbiAgICB3aWR0aDogYXV0bztcblx0aGVpZ2h0OiBhdXRvO1xuXHRtYXJnaW4tbGVmdDogMHB4OyBcbn1cbi5hZG1pbi1zaWRlbmF2IGEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxufVxuLmFkbWluLXNpZGVuYXYgbGkge1xuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXHRwYWRkaW5nOiAuNXJlbTtcblx0cGFkZGluZy1sZWZ0OiAxcmVtO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuXHR0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDtcblx0Ym9yZGVyOiAxcHggc29saWQgIzMzMzsgXG59XG4uYWRtaW4tc2lkZW5hdiBsaSBhIHtcblx0Y29sb3I6ICNmZmY7IFxufVxuXG4uYWRtaW4tc2lkZW5hdiBsaSBhOmFjdGl2ZSB7XG5cdGJvcmRlci1jb2xvcjogIzAyZDNmNTsgXG59XG5cbi5hZG1pbi1zaWRlbmF2IGxpOmhvdmVyIHtcblx0Ym9yZGVyLXJhZGl1czogMCAuNXJlbSAuNXJlbSAwO1xuXHRib3JkZXItY29sb3I6ICMwMmQzZjU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzAwNmE3YiwgIzAwMjM0MCk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNmE3YiwgIzAwMjM0MCk7IFxufVxuXG4uYWRtaW4tc2lkZW5hdiBsaTphY3RpdmUge1xuXHRib3JkZXItY29sb3I6ICMwMmQzZjU7IFxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player',
                templateUrl: './player.component.html',
                styleUrls: ['./player.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/res-admin/res-admin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/res-admin/res-admin.component.ts ***!
  \**************************************************/
/*! exports provided: ResAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResAdminComponent", function() { return ResAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ResAdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResAdminComponent.ɵfac = function ResAdminComponent_Factory(t) { return new (t || ResAdminComponent)(); };
ResAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResAdminComponent, selectors: [["app-res-admin"]], decls: 0, vars: 0, template: function ResAdminComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlcy1hZG1pbi9yZXMtYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-res-admin',
                templateUrl: './res-admin.component.html',
                styleUrls: ['./res-admin.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/reseller/reseller.component.ts":
/*!************************************************!*\
  !*** ./src/app/reseller/reseller.component.ts ***!
  \************************************************/
/*! exports provided: ResellerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResellerComponent", function() { return ResellerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function ResellerComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
function ResellerComponent_div_125_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResellerComponent_div_125_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.reseller.Gender = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Vat Registered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Country Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "+27");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Country Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "+27");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "textarea", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Postal Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "textarea", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.reseller.Gender);
} }
function ResellerComponent_div_132_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ChoohooID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Surname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResellerComponent_div_132_Template_a_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addAction("Super Admin"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Super Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResellerComponent_div_132_Template_a_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addAction("Admin Manager"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Admin Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResellerComponent_div_132_Template_a_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addAction("Delete"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResellerComponent_div_132_Template_a_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.addAction("Ban"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.details.ChoohooID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.details.Surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.details.AdminStatus);
} }
class ResellerComponent {
    constructor(router, Api, localStorageService) {
        this.router = router;
        this.Api = Api;
        this.localStorageService = localStorageService;
        this.mylogin = { username: '', stationID: '', password: '' };
        this.details = { ChoohooID: '', Surname: '', AdminStatus: '' };
        this.showmore = false;
        this.comp = "";
        this.errorMessage = "";
        this.reseller = { Type: '', Surname: '', Name: '', Email: "", Country: "", City: "", Address: "", Gender: "", DOB: "", Mobilenumber: "",
            Document: "",
            Documentkey: "",
        };
        this.showtable = false;
    }
    ngOnInit() {
    }
    onImagePicked(event) {
        const FILE = event.target.files[0];
        this.imageObj = FILE;
    }
    onImageUpload() {
        const imageForm = new FormData();
        imageForm.append('image', this.imageObj);
        imageForm.append('name', "waynedd");
        imageForm.append('username', "wayne");
        imageForm.append('ig', "waynets");
        imageForm.append('fb', "waynets");
        imageForm.append('username', "444444");
        this.Api.imageUpload(imageForm).subscribe(res => {
            // if(res){
            //   this.reseller.Document = res.image;
            //   this.reseller.Documentkey = res.key
            //   this.update(this.reseller.Document,this.reseller.Documentkey);
            // }
            // this.imageUrl = res.image;
        });
    }
    search() {
        this.showtable = false;
        if (this.mylogin.username == '') {
        }
        else {
            this.errorMessage = "";
            this.errorMessage = "";
            this.Api.search(this.mylogin.username).subscribe(response => {
                if (response) {
                    if (response.user) {
                        this.details.ChoohooID = response.user.ChoohooID;
                        this.details.Surname = response.user.Surname;
                        this.details.AdminStatus = response.user.AdminStatus;
                        if (this.details.AdminStatus == "0") {
                            this.details.AdminStatus = "player";
                        }
                        this.showtable = true;
                        // this.showlogin = true;
                        // this.showpwd =false;
                    }
                    if (response.message == "notfound") {
                        this.errorMessage = "Reseller Not Found";
                        // this.showlogin = true;
                        // this.showpwd =false;
                    }
                }
            }, error => {
                if (error.status == "401") {
                    this.errorMessage = "Incorrect Verification Code";
                }
                if (error.status == "0") {
                    this.errorMessage = "Service Unavaliable";
                }
            });
        }
    }
    addAction(action) {
        this.showtable = false;
        console.log(action);
        if (action == '') {
        }
        else {
            this.errorMessage = "";
            this.errorMessage = "";
            this.Api.add(this.mylogin.username, action).subscribe(response => {
                if (response) {
                    if (response.message == "Account deteled") {
                        this.errorMessage = "Account Deleted";
                        this.showtable = false;
                    }
                    if (response.message == "Account updated") {
                        this.errorMessage = "Account updated";
                        this.Api.search(this.mylogin.username).subscribe(response => {
                            if (response) {
                                if (response.user) {
                                    this.details.ChoohooID = response.user.ChoohooID;
                                    this.details.Surname = response.user.Surname;
                                    this.details.AdminStatus = response.user.AdminStatus;
                                    if (this.details.AdminStatus == "0") {
                                        this.details.AdminStatus = "player";
                                    }
                                    this.showtable = true;
                                    // this.showlogin = true;
                                    // this.showpwd =false;
                                }
                                if (response.message == "notfound") {
                                    this.errorMessage = "User not Found";
                                    // this.showlogin = true;
                                    // this.showpwd =false;
                                }
                            }
                        }, error => {
                            if (error.status == "0") {
                                this.errorMessage = "Service Unavaliable";
                            }
                        });
                    }
                }
            }, error => {
                if (error.status == "401") {
                    this.errorMessage = "Incorrect Verification Code";
                }
                if (error.status == "0") {
                    this.errorMessage = "Service Unavaliable";
                }
            });
        }
    }
    submit() {
        this.Api.apply(this.reseller).subscribe(response => {
            if (response) {
                if (response.message) {
                    this.errorMessage = response.message;
                    if (this.errorMessage === "Created") {
                        this.onImageUpload();
                    }
                }
            }
        }, error => {
            if (error.status == "401") {
                this.errorMessage = "Incorrect Verification Code";
            }
            if (error.status == "0") {
                this.errorMessage = "Service Unavaliable";
            }
        });
    }
    company() {
        console.log(this.comp);
    }
    onOptionsSelected(value) {
        this.comp = value;
        if (this.comp === "yes") {
            this.showmore = true;
        }
        if (this.comp === "no") {
            this.showmore = false;
        }
        console.log("the selected value is " + value);
    }
    update(doc, key) {
        this.Api.updateReseller(this.reseller.Email, doc, key).subscribe(response => {
            if (response) {
                if (response.message) {
                    this.errorMessage = response.message;
                    if (this.errorMessage === "Account updated") {
                        this.errorMessage = "Succesfully Registered";
                        this.router.navigate(['/pf']);
                    }
                }
            }
        }, error => {
            if (error.status == "401") {
                this.errorMessage = "Incorrect Verification Code";
            }
            if (error.status == "0") {
                this.errorMessage = "Service Unavaliable";
            }
        });
    }
    getME() {
        this.Api.getPrice().subscribe(response => {
            if (response) {
            }
        }, error => {
            if (error.status == "401") {
                this.errorMessage = "Incorrect Verification Code";
            }
            if (error.status == "0") {
                this.errorMessage = "Service Unavaliable";
            }
        });
    }
    logout() {
        this.localStorageService.clearAll();
        this.router.navigate(['/login']);
    }
}
ResellerComponent.ɵfac = function ResellerComponent_Factory(t) { return new (t || ResellerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"])); };
ResellerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResellerComponent, selectors: [["app-reseller"]], decls: 133, vars: 12, consts: [[1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "container-fluid", 2, "margin-right", "20%"], [1, "row"], ["id", "admin-sidebar", 1, "col-md-2", "p-x-0", "p-y-3"], [1, "sidenav", "admin-sidenav", "list-unstyled"], ["routerLink", "/rs", "routerLinkActive", "active"], ["routerLink", "/pf"], ["routerLink", "/hr"], ["routerLink", "/payments"], [3, "click"], ["href", "#"], ["id", "admin-main-control", 1, "col-md-10", "p-x-3", "p-y-1"], ["id", "page-wrapper"], [1, "container-fluid"], ["id", "main", 1, "row"], ["id", "content", 1, "col-sm-12", "col-md-12", "well"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "container"], [1, "col-md-6", "col-md-offset-3"], ["for", "usr"], ["id", "sel1", "name", "sellist1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "Sales Reseller Shop"], ["value", "Sales Reseller Online"], ["value", "Sales Reseller Independent Executive"], [1, "input-group", "mb-3"], ["type", "text", "name", "email", "placeholder", "Your Name", "id", "mail", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "text", "name", "email", "placeholder", "Your Email", "id", "mail", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group", "mt-3", "mb-3"], ["type", "text", "name", "email", "placeholder", "Mobile number", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-prepend"], ["type", "button", "data-toggle", "dropdown", 1, "btn", "btn-outline-secondary", "dropdown-toggle"], ["type", "text", "name", "email", "placeholder", "Country ", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "email", "placeholder", "City ", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["for", "comment"], ["name", "email", "rows", "5", "id", "comment", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "email", "placeholder", "DOB ", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "Male"], ["value", "Female"], ["value", "Non Binary"], ["id", "sel1", "name", "sellist1", 1, "form-control", 3, "change"], ["mySelect", ""], ["value", "no"], ["value", "yes"], [4, "ngIf"], ["placeholder", "Upload Image", "type", "file", 3, "change"], ["type", "submit", 1, "btn", "btn-dark", 3, "click"], ["class", "container", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "text", "name", "email", "placeholder", "Company Name ", 1, "form-control"], ["type", "text", "name", "email", "placeholder", "Company Registration Number", 1, "form-control"], ["id", "sel1", "name", "sellist1", 1, "form-control"], ["type", "text", "name", "email", "placeholder", "Vat Number", 1, "form-control"], ["type", "text", "name", "email", "placeholder", "Email", "id", "mail", "name", "email", 1, "form-control"], [1, "dropdown-menu"], [1, "dropdown-item"], ["type", "text", "placeholder", "Contact  Number", 1, "form-control"], ["type", "text", "name", "email", "placeholder", "Mobile Number", 1, "form-control"], ["type", "text", "placeholder", "Country ", 1, "form-control"], ["type", "text", "placeholder", "City ", 1, "form-control"], ["rows", "5", "name", "email", "id", "comment", 1, "form-control"], ["name", "email", "rows", "5", "id", "comment", 1, "form-control"], [1, "span5"], [1, "table", "table-striped", "table-condensed"], [1, "label", "label-success"], [1, "btn-group", "show-on-hover"], ["type", "button", "data-toggle", "dropdown", 1, "btn", "btn-default", "dropdown-toggle"], [1, "caret"], ["role", "menu", 1, "dropdown-menu"], ["value", "Super Admin", 3, "click"], ["value", "Admin Manage", 3, "click"]], template: function ResellerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CHOOHOO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Become Reseller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reseller Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Transcations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResellerComponent_Template_li_click_22_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "LOGOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "NavLink 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "NavLink 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "NavLink 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "NavLink 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ResellerComponent_div_66_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Generate Reseller ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Choose Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResellerComponent_Template_select_ngModelChange_76_listener($event) { return ctx.reseller.Type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Sales Reseller Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sales Reseller Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Sales Reseller Independent Executive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResellerComponent_Template_input_ngModelChange_85_listener($event) { return ctx.reseller.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResellerComponent_Template_input_ngModelChange_88_listener($event) { return ctx.reseller.Email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResellerComponent_Template_input_ngModelChange_91_listener($event) { return ctx.reseller.Mobilenumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResellerComponent_Template_input_ngModelChange_96_listener($event) { return ctx.reseller.Country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResellerComponent_Template_input_ngModelChange_99_listener($event) { return ctx.reseller.City = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "textarea", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResellerComponent_Template_textarea_ngModelChange_103_listener($event) { return ctx.reseller.Address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResellerComponent_Template_input_ngModelChange_106_listener($event) { return ctx.reseller.DOB = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Choose Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResellerComponent_Template_select_ngModelChange_109_listener($event) { return ctx.reseller.Gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Non Binary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Company Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "select", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ResellerComponent_Template_select_change_118_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](119); return ctx.onOptionsSelected(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, ResellerComponent_div_125_Template, 62, 1, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ResellerComponent_Template_input_change_126_listener($event) { return ctx.onImagePicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResellerComponent_Template_button_click_130_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, ResellerComponent_div_132_Template, 44, 3, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reseller.Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reseller.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reseller.Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reseller.Mobilenumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reseller.Country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reseller.City);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reseller.Address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reseller.DOB);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reseller.Gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showmore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showtable);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]], styles: ["@import 'https://fonts.googleapis.com/css?family=Raleway:300,400';\n\n\nbody[_ngcontent-%COMP%] {\n    font-family: 'Raleway:300', sans-serif\n}\n\n\n.admin-sidenav[_ngcontent-%COMP%] {\n    width: auto;\n\theight: auto;\n\tmargin-left: 0px; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\ttext-decoration: none; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\ttext-align: justify;\n\tpadding: .5rem;\n\tpadding-left: 1rem;\n\ttransition: all .2s linear;\n\tbackground-color: #000;\n\tborder: 1px solid #333; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n\tborder-radius: 0 .5rem .5rem 0;\n\tborder-color: #02d3f5;\n\ttransform: translate(30px, 0px);\n\tbackground: linear-gradient(to right, #006a7b, #002340); \n}\n\n\n.admin-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active {\n\tborder-color: #02d3f5; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZWxsZXIvcmVzZWxsZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRUFBaUU7OztBQUdqRTtJQUNJO0FBQ0o7OztBQUVBO0lBQ0ksV0FBVztDQUNkLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7OztBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCOzs7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2Qsa0JBQWtCO0NBRWxCLDBCQUEwQjtDQUMxQixzQkFBc0I7Q0FDdEIsc0JBQXNCO0FBQ3ZCOzs7QUFDQTtDQUNDLFdBQVc7QUFDWjs7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7OztBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLHFCQUFxQjtDQUVyQiwrQkFBK0I7Q0FFL0IsdURBQXVEO0FBQ3hEOzs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL3Jlc2VsbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTozMDAsNDAwJztcblxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXk6MzAwJywgc2Fucy1zZXJpZlxufVxuICAgIFxuLmFkbWluLXNpZGVuYXYge1xuICAgIHdpZHRoOiBhdXRvO1xuXHRoZWlnaHQ6IGF1dG87XG5cdG1hcmdpbi1sZWZ0OiAwcHg7IFxufVxuLmFkbWluLXNpZGVuYXYgYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXG59XG4uYWRtaW4tc2lkZW5hdiBsaSB7XG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XG5cdHBhZGRpbmc6IC41cmVtO1xuXHRwYWRkaW5nLWxlZnQ6IDFyZW07XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XG5cdHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzMzOyBcbn1cbi5hZG1pbi1zaWRlbmF2IGxpIGEge1xuXHRjb2xvcjogI2ZmZjsgXG59XG5cbi5hZG1pbi1zaWRlbmF2IGxpIGE6YWN0aXZlIHtcblx0Ym9yZGVyLWNvbG9yOiAjMDJkM2Y1OyBcbn1cblxuLmFkbWluLXNpZGVuYXYgbGk6aG92ZXIge1xuXHRib3JkZXItcmFkaXVzOiAwIC41cmVtIC41cmVtIDA7XG5cdGJvcmRlci1jb2xvcjogIzAyZDNmNTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDA2YTdiLCAjMDAyMzQwKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA2YTdiLCAjMDAyMzQwKTsgXG59XG5cbi5hZG1pbi1zaWRlbmF2IGxpOmFjdGl2ZSB7XG5cdGJvcmRlci1jb2xvcjogIzAyZDNmNTsgXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResellerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reseller',
                templateUrl: './reseller.component.html',
                styleUrls: ['./reseller.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class ApiService {
    constructor(http) {
        this.http = http;
        this.url = 'http://ec2-13-244-78-252.af-south-1.compute.amazonaws.com:8080';
    }
    login(username, password) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.url + '/login', {
            Email: username,
            password: password
        }, httpOptions)
            .map(user => {
            return user;
        });
    }
    reset(username, password) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.url + '/reset', {
            Email: username,
        }, httpOptions)
            .map(user => {
            return user;
        });
    }
    sendverifyCode(username, password) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.url + '/sendverifyCode', {
            Email: username,
        }, httpOptions)
            .map(user => {
            return user;
        });
    }
    findme(username) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.url + '/findReseller', {
            Email: username,
        }, httpOptions)
            .map(user => {
            return user;
        });
    }
    findReseller(username) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.url + '/findResellerID', {
            ResellerID: username,
        }, httpOptions)
            .map(user => {
            return user;
        });
    }
    getResllers() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.get(this.url + '/getResellers', {})
            .map(user => {
            return user;
        });
    }
    getPrice() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.get(this.url + '/getPrice', {})
            .map(user => {
            return user;
        });
    }
    getusers() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.get(this.url + '/getUsers', {})
            .map(user => {
            return user;
        });
    }
    updateReseller(username, pro, key) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.url + '/updatedFiles', {
            Email: username,
            Document: pro,
            Documentkey: key
        }, httpOptions)
            .map(user => {
            return user;
        });
    }
    updateResellerStatus(username, status) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.url + '/updatedReseller', {
            Email: username,
            Status: status,
        }, httpOptions)
            .map(user => {
            return user;
        });
    }
    apply(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.url + '/apply', {
            Type: user.Type,
            Name: user.Name,
            Email: user.Email,
            Country: user.Country,
            City: user.City,
            Address: user.Address,
            Gender: user.Gender,
            DOB: user.DOB,
            Document: user.Document,
            Documentkey: user.Documentkey,
            Mobilenumber: user.Mobilenumber
        }, httpOptions)
            .map(user => {
            return user;
        });
    }
    changepassword(username, code, password) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.url + '/changepassword', {
            Email: username,
            Code: code,
            password: password
        }, httpOptions)
            .map(user => {
            return user;
        });
    }
    search(username) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.url + '/getAccount', {
            Email: username,
        }, httpOptions)
            .map(user => {
            return user;
        });
    }
    add(username, status) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.url + '/addAdmin', {
            Email: username,
            AdminStatus: status
        }, httpOptions)
            .map(user => {
            return user;
        });
    }
    imageUpload(imageForm) {
        console.log('image uploading');
        return this.http.post('http://localhost:9000/upload', imageForm);
    }
    setprice(username) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.url + '/setPrice', {
            price: username,
        }, httpOptions)
            .map(user => {
            return user;
        });
    }
    history(username) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.url + '/Gameunit4seller', {
            ResellerID: username,
        }, httpOptions)
            .map(user => {
            return user;
        });
    }
    buyUnits(data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.url + '/buyReseller', {
            Type: data.Type,
            Name: data.Name,
            Surname: data.Surname,
            Email: data.Email,
            method: data.method,
            units: data.units,
            Country: data.Country,
            transcationID: data.transcationID,
            price: data.price,
            ResellerID: data.ResellerID,
        }, httpOptions)
            .map(user => {
            return user;
        });
    }
    getResellerPayments(Resellerid) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.url + '/paymentsID', {
            ID: Resellerid,
        }, httpOptions)
            .map(results => {
            return results;
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/super-admin/super-admin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/super-admin/super-admin.component.ts ***!
  \******************************************************/
/*! exports provided: SuperAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminComponent", function() { return SuperAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function SuperAdminComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
function SuperAdminComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ChoohooID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Surname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuperAdminComponent_div_21_Template_a_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addAction("SuperAdmin"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "SuperAdmin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuperAdminComponent_div_21_Template_a_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addAction("Admin Manager"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Admin Manager ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuperAdminComponent_div_21_Template_a_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.addAction("Delete"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuperAdminComponent_div_21_Template_a_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addAction("Ban"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Ban ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.details.ChoohooID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.details.Surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.details.AdminStatus);
} }
class SuperAdminComponent {
    constructor() {
        this.mylogin = { username: '', stationID: '', password: '' };
        this.details = { ChoohooID: '', Surname: '', AdminStatus: '' };
        this.role = "";
        this.errorMessage = '';
        this.showAdmin = false;
        this.showtable = false;
    }
    ngOnInit() {
    }
    search() { }
    addAction(action) { }
}
SuperAdminComponent.ɵfac = function SuperAdminComponent_Factory(t) { return new (t || SuperAdminComponent)(); };
SuperAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuperAdminComponent, selectors: [["app-super-admin"]], decls: 22, vars: 3, consts: [[1, "container-align"], [1, "container-fluid"], ["id", "content", 1, "col-sm-10"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "row"], [1, "col-md-6", "col-md-offset-3"], [1, "col-md-4", "col-md-offset-3"], ["action", "", 1, "search-form"], [1, "form-group", "has-feedback"], ["for", "search", 1, "sr-only"], ["type", "text", "name", "search", "id", "search", "placeholder", "search", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "glyphicon", "glyphicon-search", "form-control-feedback"], ["type", "submit", "s", "", 1, "btn", "btn-dark", 3, "click"], ["class", "container", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], [1, "container"], [1, "span5"], [1, "table", "table-striped", "table-condensed"], [1, "label", "label-success"], [1, "btn-group", "show-on-hover"], ["type", "button", "data-toggle", "dropdown", 1, "btn", "btn-default", "dropdown-toggle"], [1, "caret"], ["role", "menu", 1, "dropdown-menu"], ["value", "Super Admin", 3, "click"], ["value", "Admin Manage", 3, "click"]], template: function SuperAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome Admin!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SuperAdminComponent_div_6_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Search User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SuperAdminComponent_Template_input_ngModelChange_17_listener($event) { return ctx.mylogin.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuperAdminComponent_Template_button_click_19_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SuperAdminComponent_div_21_Template, 44, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mylogin.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showtable);
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyLWFkbWluL3N1cGVyLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuperAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-super-admin',
                templateUrl: './super-admin.component.html',
                styleUrls: ['./super-admin.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/petrusl/Documents/ChoohooAngularApp/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map