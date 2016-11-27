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
      ATTBONUS: "0x249C",
      monsterVial_1: "0x225F",
      monsterVial_2: "0x2260",
      monsterVial_3: "0x2261",
      shieldRod: "0x2262",
      leatherShield: "0x2263",
      knightShield: "0x2264",
      ironShield: "0x2265",
      axelordShield: "0x2266",
      heraldShield: "0x2267",
      darkShield: "0x2268",
      goddessShield: "0x2269",
      shamanShield: "0x226A",
      medusaShield: "0x226B",
      skullShield: "0x226C",
      fireShield: "0x226D",
      alucardShield: "0x226E",
      swordOfDawn: "0x226F",
      basilard: "0x2270",
      shortSword: "0x2271",
      combatKnife: "0x2272",
      nunchuku: "0x2273",
      wereBane: "0x2274",
      rapier: "0x2275",
      karmaCoin: "0x2276",
      magicMissile: "0x2277",
      redRust: "0x2278",
      takemitsu: "0x2279",
      shotel: "0x227A",
      orange: "0x227B",
      apple: "0x227C",
      banana: "0x227D",
      grapes: "0x227E",
      strawberry: "0x227F",
      pineapple: "0x2280",
      peanuts: "0x2281",
      toadstool: "0x2282",
      shiitake: "0x2283",
      cheesecake: "0x2284",
      shortcake: "0x2285",
      tart: "0x2286",
      parfait: "0x2287",
      pudding: "0x2288",
      iceCream: "0x2289",
      frankfurter: "0x228A",
      hamburger: "0x228B",
      pizza: "0x228C",
      cheese: "0x228D",
      hamAndEggs: "0x228E",
      omelette: "0x228F",
      morningSet: "0x2290",
      lunchA: "0x2291",
      lunchB: "0x2292",
      curryRice: "0x2293",
      gyrosPlate: "0x2294",
      spaghetti: "0x2295",
      grapeJuice: "0x2296",
      barleyTea: "0x2297",
      greenTea: "0x2298",
      natou: "0x2299",
      ramen: "0x229A",
      misoSoup: "0x229B",
      sushi: "0x229C",
      porkBun: "0x229D",
      readBeanBun: "0x229E",
      chineseBun: "0x229F",
      dimSumSet: "0x22A0",
      potRoast: "0x22A1",
      sirloin: "0x22A2",
      turkey: "0x22A3",
      mealTicket: "0x22A4",
      neutronBomb: "0x22A5",
      powerOfSire: "0x22A6",
      pentagram: "0x22A7",
      batPentagram: "0x22A8",
      shuriken: "0x22A9",
      crossShuriken: "0x22AA",
      buffaloShuriken: "0x22AB",
      flameShuriken: "0x22AC",
      tnt: "0x22AD",
      bwakaKnife: "0x22AE",
      boomerang: "0x22AF",
      javelin: "0x22B0",
      tyrfing: "0x22B1",
      namakura: "0x22B2",
      knuckleDuster: "0x22B3",
      gladius: "0x22B4",
      scimitar: "0x22B5",
      cutlass: "0x22B6",
      sabre: "0x22B7",
      falchion: "0x22B8",
      broadsword: "0x22B9",
      bekatowa: "0x22BA",
      damascusSword: "0x22BB",
      hunterSword: "0x22BC",
      estoc: "0x22BD",
      bastardSword: "0x22BE",
      jewelKnuckles: "0x22BF",
      claymore: "0x22C0",
      talware: "0x22C1",
      katana: "0x22C2",
      flameberge: "0x22C3",
      ironFist: "0x22C4",
      zweiHander: "0x22C5",
      swordOfHador: "0x22C6",
      luminus: "0x22C7",
      harper: "0x22C8",
      obsidianSword: "0x22C9",
      gram: "0x22CA",
      jewelSword: "0x22CB",
      mormegil: "0x22CC",
      firebrand: "0x22CD",
      thunderSword: "0x22CE",
      icebrand: "0x22CF",
      stoneSword: "0x22D0",
      holySword: "0x22D1",
      terminusEst: "0x22D2",
      marsil: "0x22D3",
      darkBlade: "0x22D4",
      heavenSword: "0x22D5",
      fistOfTulkas: "0x22D6",
      gurthang: "0x22D7",
      mourneBlade: "0x22D8",
      alucardSword: "0x22D9",
      mablungSword: "0x22DA",
      badelaire: "0x22DB",
      swordFamiliar: "0x22DC",
      greatSword: "0x22DD",
      mace: "0x22DE",
      morningstar: "0x22DF",
      holyRod: "0x22E0",
      starFlail: "0x22E1",
      moonRod: "0x22E2",
      chakram: "0x22E3",
      fireBoomerang: "0x22E4",
      ironBall: "0x22E5",
      holbeinDagger: "0x22E6",
      blueKnuckles: "0x22E7",
      dynamite: "0x22E8",
      osafuneKatana: "0x22E9",
      masamune: "0x22EA",
      muramasa: "0x22EB",
      heartRefresh: "0x22EC",
      runeSword: "0x22ED",
      antiVenom: "0x22EE",
      uncurse: "0x22EF",
      lifeApple: "0x22F0",
      hammer: "0x22F1",
      strUp: "0x22F2",
      lckUp: "0x22F3",
      intUp: "0x22F4",
      attackUp: "0x22F5",
      defenseUp: "0x22F6",
      resistFire: "0x22F7",
      resistThunder: "0x22F8",
      resistIce: "0x22F9",
      resistStone: "0x22FA",
      resistHoly: "0x22FB",
      resistDark: "0x22FC",
      potion: "0x22FD",
      highPotion: "0x22FE",
      elixir: "0x22FF",
      mannaPrism: "0x2300",
      vorpalBlade: "0x2301",
      crissagrim: "0x2302",
      yasatsuna: "0x2303",
      libraryCard: "0x2304",
      alucartShield: "0x2305",
      alucartSword: "0x2306"
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
