"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const app_component_1 = require("./components/app.component");
const character_component_1 = require("./components/character.component");
const inventory_component_1 = require("./components/inventory.component");
const selectfile_component_1 = require("./components/selectfile.component");
const file_service_1 = require("./services/file.service");
const sotn_1 = require("./custom/sotn");
const routes = [
    { path: '', redirectTo: 'selectfile', pathMatch: 'full' },
    { path: 'character', component: character_component_1.CharacterComponent },
    { path: 'selectfile', component: selectfile_component_1.SelectFileComponent },
    { path: 'inventory', component: inventory_component_1.InventoryComponent }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes),
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            character_component_1.CharacterComponent,
            selectfile_component_1.SelectFileComponent,
            inventory_component_1.InventoryComponent
        ],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, file_service_1.FileService, sotn_1.SOTN],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=bootstrap.js.map