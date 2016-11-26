/**
 * Crissaegrim
 * Symphony of the Night Utility Class
 *
 * @author Derek Smart <derek@grindaga.com>
 * @link https://github.com/mcred/crissaegrim
 * @version 0.0.1
 */

export class SOTN {
  file: any;
  map: Object;

  constructor()
  {
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

  public getFile()
  {
    return this.file;
  }

  public setFile(file: any)
  {
    this.file = file;
  }

  public getValueByName(name: string): number
  {
    return this.file[parseInt(this.map[name])];
  }

  public setValueByName(name: string, val: number): void
  {
    this.file[parseInt(this.map[name])] = val;
  }
}
