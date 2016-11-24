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
const file_service_1 = require("../services/file.service");
let CharacterComponent = class CharacterComponent {
    constructor(route, fileService) {
        this.route = route;
        this.fileService = fileService;
    }
    ngOnInit() {
        this.file = this.fileService.file;
        console.log(this.fileService.file);
        this.hp = this.file[parseInt("0x2474")];
        this.hpmax = this.file[parseInt("0x2478")];
        this.mp = this.file[parseInt("0x2484")];
        this.mpmax = this.file[parseInt("0x2488")];
    }
};
CharacterComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'templates/character.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        file_service_1.FileService])
], CharacterComponent);
exports.CharacterComponent = CharacterComponent;
//# sourceMappingURL=character.component.js.map