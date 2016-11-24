/**
 * Crissaegrim
 * Symphony of the Night Utility Class
 *
 * @author Derek Smart <derek@grindaga.com>
 * @link https://github.com/mcred/crissaegrim
 * @version 0.0.1
 */
"use strict";
class SOTN {
    constructor() {
        this.map = {
            HP: "0x2474",
            HPMAX: "0x2478",
            HEARTS: "0x247C",
            HEARTMAX: "0x2480",
            MP: "0x2484",
            MPMAX: "0x2488",
            STR: "0x248C",
            CON: "0x2490",
            INT: "0x2494",
            LCK: "0x2498",
            ATTBONUS: "0x249C"
        };
    }
    setFile(file) {
        this.file = file;
    }
    getValueByName(name) {
        return this.file[parseInt(this.map[name])];
    }
}
exports.SOTN = SOTN;
//# sourceMappingURL=sotn.js.map