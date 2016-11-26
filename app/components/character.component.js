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
const electron_1 = require("electron");
const router_1 = require("@angular/router");
const file_service_1 = require("../services/file.service");
const sotn_1 = require("../custom/sotn");
const alucard_1 = require("../models/alucard");
let CharacterComponent = class CharacterComponent {
    constructor(router, route, fileService, sotn) {
        this.router = router;
        this.route = route;
        this.fileService = fileService;
        this.sotn = sotn;
    }
    ngOnInit() {
        this.sotn.setFile(this.fileService.file);
        this.alucard = new alucard_1.Alucard(this.sotn.getValueByName('HP'), this.sotn.getValueByName('HPMAX'), this.sotn.getValueByName('MP'), this.sotn.getValueByName('MPMAX'), this.sotn.getValueByName('HEARTS'), this.sotn.getValueByName('HEARTMAX'), this.sotn.getValueByName('STR'), this.sotn.getValueByName('CON'), this.sotn.getValueByName('INT'), this.sotn.getValueByName('LCK'));
    }
    updateFile() {
        for (var stat in this.alucard) {
            this.sotn.setValueByName(stat, this.alucard[stat]);
        }
        electron_1.ipcRenderer.send('saveFile', this.fileService.location, this.sotn.getFile());
        electron_1.ipcRenderer.on('fileSaved', (event) => {
            alert('File was saved.');
        });
    }
    cancelSave() {
        this.router.navigate(['/']);
    }
};
CharacterComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'templates/character.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        file_service_1.FileService,
        sotn_1.SOTN])
], CharacterComponent);
exports.CharacterComponent = CharacterComponent;
//# sourceMappingURL=character.component.js.map