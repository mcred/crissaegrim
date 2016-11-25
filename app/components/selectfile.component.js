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
const router_1 = require("@angular/router");
const electron_1 = require("electron");
const file_service_1 = require("../services/file.service");
let SelectFileComponent = class SelectFileComponent {
    constructor(router, fileService) {
        this.router = router;
        this.fileService = fileService;
    }
    selectFile() {
        electron_1.ipcRenderer.send('showOpenDialog');
        electron_1.ipcRenderer.on('getFile', (event, file, location) => {
            this.fileService.file = file;
            this.fileService.location = location;
            this.router.navigate(['/character']);
        });
    }
};
SelectFileComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'templates/selectFile.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        file_service_1.FileService])
], SelectFileComponent);
exports.SelectFileComponent = SelectFileComponent;
//# sourceMappingURL=selectfile.component.js.map