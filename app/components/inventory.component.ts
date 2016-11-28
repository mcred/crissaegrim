import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';
import { Router, ActivatedRoute } from '@angular/router';
import { FileService } from '../services/file.service';
import { SOTN } from '../custom/sotn';
import { Inventory } from '../models/inventory';

@Component({
  selector: 'app',
  templateUrl: 'templates/inventory.html'
})

export class InventoryComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fileService: FileService,
    private sotn: SOTN
  ) {}

  public inventory: Inventory;
  public arrayOfKeys;

  ngOnInit() {
    this.sotn.setFile(this.fileService.file);
    this.inventory = new Inventory(
      this.sotn.getValueByName("emptyHand"),
      this.sotn.getValueByName("monsterVial_1"),
      this.sotn.getValueByName("monsterVial_2"),
      this.sotn.getValueByName("monsterVial_3"),
      this.sotn.getValueByName("shieldRod"),
      this.sotn.getValueByName("leatherShield"),
      this.sotn.getValueByName("knightShield"),
      this.sotn.getValueByName("ironShield"),
      this.sotn.getValueByName("axelordShield"),
      this.sotn.getValueByName("heraldShield"),
      this.sotn.getValueByName("darkShield"),
      this.sotn.getValueByName("goddessShield"),
      this.sotn.getValueByName("shamanShield"),
      this.sotn.getValueByName("medusaShield"),
      this.sotn.getValueByName("skullShield"),
      this.sotn.getValueByName("fireShield"),
      this.sotn.getValueByName("alucardShield"),
      this.sotn.getValueByName("swordOfDawn"),
      this.sotn.getValueByName("basilard"),
      this.sotn.getValueByName("shortSword"),
      this.sotn.getValueByName("combatKnife"),
      this.sotn.getValueByName("nunchuku"),
      this.sotn.getValueByName("wereBane"),
      this.sotn.getValueByName("rapier"),
      this.sotn.getValueByName("karmaCoin"),
      this.sotn.getValueByName("magicMissile"),
      this.sotn.getValueByName("redRust"),
      this.sotn.getValueByName("takemitsu"),
      this.sotn.getValueByName("shotel"),
      this.sotn.getValueByName("orange"),
      this.sotn.getValueByName("apple"),
      this.sotn.getValueByName("banana"),
      this.sotn.getValueByName("grapes"),
      this.sotn.getValueByName("strawberry"),
      this.sotn.getValueByName("pineapple"),
      this.sotn.getValueByName("peanuts"),
      this.sotn.getValueByName("toadstool"),
      this.sotn.getValueByName("shiitake"),
      this.sotn.getValueByName("cheesecake"),
      this.sotn.getValueByName("shortcake"),
      this.sotn.getValueByName("tart"),
      this.sotn.getValueByName("parfait"),
      this.sotn.getValueByName("pudding"),
      this.sotn.getValueByName("iceCream"),
      this.sotn.getValueByName("frankfurter"),
      this.sotn.getValueByName("hamburger"),
      this.sotn.getValueByName("pizza"),
      this.sotn.getValueByName("cheese"),
      this.sotn.getValueByName("hamAndEggs"),
      this.sotn.getValueByName("omelette"),
      this.sotn.getValueByName("morningSet"),
      this.sotn.getValueByName("lunchA"),
      this.sotn.getValueByName("lunchB"),
      this.sotn.getValueByName("curryRice"),
      this.sotn.getValueByName("gyrosPlate"),
      this.sotn.getValueByName("spaghetti"),
      this.sotn.getValueByName("grapeJuice"),
      this.sotn.getValueByName("barleyTea"),
      this.sotn.getValueByName("greenTea"),
      this.sotn.getValueByName("natou"),
      this.sotn.getValueByName("ramen"),
      this.sotn.getValueByName("misoSoup"),
      this.sotn.getValueByName("sushi"),
      this.sotn.getValueByName("porkBun"),
      this.sotn.getValueByName("readBeanBun"),
      this.sotn.getValueByName("chineseBun"),
      this.sotn.getValueByName("dimSumSet"),
      this.sotn.getValueByName("potRoast"),
      this.sotn.getValueByName("sirloin"),
      this.sotn.getValueByName("turkey"),
      this.sotn.getValueByName("mealTicket"),
      this.sotn.getValueByName("neutronBomb"),
      this.sotn.getValueByName("powerOfSire"),
      this.sotn.getValueByName("pentagram"),
      this.sotn.getValueByName("batPentagram"),
      this.sotn.getValueByName("shuriken"),
      this.sotn.getValueByName("crossShuriken"),
      this.sotn.getValueByName("buffaloShuriken"),
      this.sotn.getValueByName("flameShuriken"),
      this.sotn.getValueByName("tnt"),
      this.sotn.getValueByName("bwakaKnife"),
      this.sotn.getValueByName("boomerang"),
      this.sotn.getValueByName("javelin"),
      this.sotn.getValueByName("tyrfing"),
      this.sotn.getValueByName("namakura"),
      this.sotn.getValueByName("knuckleDuster"),
      this.sotn.getValueByName("gladius"),
      this.sotn.getValueByName("scimitar"),
      this.sotn.getValueByName("cutlass"),
      this.sotn.getValueByName("sabre"),
      this.sotn.getValueByName("falchion"),
      this.sotn.getValueByName("broadsword"),
      this.sotn.getValueByName("bekatowa"),
      this.sotn.getValueByName("damascusSword"),
      this.sotn.getValueByName("hunterSword"),
      this.sotn.getValueByName("estoc"),
      this.sotn.getValueByName("bastardSword"),
      this.sotn.getValueByName("jewelKnuckles"),
      this.sotn.getValueByName("claymore"),
      this.sotn.getValueByName("talware"),
      this.sotn.getValueByName("katana"),
      this.sotn.getValueByName("flameberge"),
      this.sotn.getValueByName("ironFist"),
      this.sotn.getValueByName("zweiHander"),
      this.sotn.getValueByName("swordOfHador"),
      this.sotn.getValueByName("luminus"),
      this.sotn.getValueByName("harper"),
      this.sotn.getValueByName("obsidianSword"),
      this.sotn.getValueByName("gram"),
      this.sotn.getValueByName("jewelSword"),
      this.sotn.getValueByName("mormegil"),
      this.sotn.getValueByName("firebrand"),
      this.sotn.getValueByName("thunderSword"),
      this.sotn.getValueByName("icebrand"),
      this.sotn.getValueByName("stoneSword"),
      this.sotn.getValueByName("holySword"),
      this.sotn.getValueByName("terminusEst"),
      this.sotn.getValueByName("marsil"),
      this.sotn.getValueByName("darkBlade"),
      this.sotn.getValueByName("heavenSword"),
      this.sotn.getValueByName("fistOfTulkas"),
      this.sotn.getValueByName("gurthang"),
      this.sotn.getValueByName("mourneBlade"),
      this.sotn.getValueByName("alucardSword"),
      this.sotn.getValueByName("mablungSword"),
      this.sotn.getValueByName("badelaire"),
      this.sotn.getValueByName("swordFamiliar"),
      this.sotn.getValueByName("greatSword"),
      this.sotn.getValueByName("mace"),
      this.sotn.getValueByName("morningstar"),
      this.sotn.getValueByName("holyRod"),
      this.sotn.getValueByName("starFlail"),
      this.sotn.getValueByName("moonRod"),
      this.sotn.getValueByName("chakram"),
      this.sotn.getValueByName("fireBoomerang"),
      this.sotn.getValueByName("ironBall"),
      this.sotn.getValueByName("holbeinDagger"),
      this.sotn.getValueByName("blueKnuckles"),
      this.sotn.getValueByName("dynamite"),
      this.sotn.getValueByName("osafuneKatana"),
      this.sotn.getValueByName("masamune"),
      this.sotn.getValueByName("muramasa"),
      this.sotn.getValueByName("heartRefresh"),
      this.sotn.getValueByName("runeSword"),
      this.sotn.getValueByName("antiVenom"),
      this.sotn.getValueByName("uncurse"),
      this.sotn.getValueByName("lifeApple"),
      this.sotn.getValueByName("hammer"),
      this.sotn.getValueByName("strUp"),
      this.sotn.getValueByName("lckUp"),
      this.sotn.getValueByName("intUp"),
      this.sotn.getValueByName("attackUp"),
      this.sotn.getValueByName("defenseUp"),
      this.sotn.getValueByName("resistFire"),
      this.sotn.getValueByName("resistThunder"),
      this.sotn.getValueByName("resistIce"),
      this.sotn.getValueByName("resistStone"),
      this.sotn.getValueByName("resistHoly"),
      this.sotn.getValueByName("resistDark"),
      this.sotn.getValueByName("potion"),
      this.sotn.getValueByName("highPotion"),
      this.sotn.getValueByName("elixir"),
      this.sotn.getValueByName("mannaPrism"),
      this.sotn.getValueByName("vorpalBlade"),
      this.sotn.getValueByName("crissagrim"),
      this.sotn.getValueByName("yasatsuna"),
      this.sotn.getValueByName("libraryCard"),
      this.sotn.getValueByName("alucartShield"),
      this.sotn.getValueByName("alucartSword"),
      this.sotn.getValueByName("emptyBody"),
      this.sotn.getValueByName("clothTunic"),
      this.sotn.getValueByName("hideCuirass"),
      this.sotn.getValueByName("bronzeCuirass"),
      this.sotn.getValueByName("ironCuirass"),
      this.sotn.getValueByName("steelCuirass"),
      this.sotn.getValueByName("silverPlate"),
      this.sotn.getValueByName("goldPlate"),
      this.sotn.getValueByName("platinumMail"),
      this.sotn.getValueByName("diamondPlate"),
      this.sotn.getValueByName("fireMail"),
      this.sotn.getValueByName("lightningMail"),
      this.sotn.getValueByName("iceMail"),
      this.sotn.getValueByName("mirrorCuirass"),
      this.sotn.getValueByName("spikeBreakerArmor"),
      this.sotn.getValueByName("alucardArmor"),
      this.sotn.getValueByName("darkArmor"),
      this.sotn.getValueByName("healingMail"),
      this.sotn.getValueByName("holyArmor"),
      this.sotn.getValueByName("walkArmor"),
      this.sotn.getValueByName("brilliantArmor"),
      this.sotn.getValueByName("mojoMail"),
      this.sotn.getValueByName("furyPlate"),
      this.sotn.getValueByName("draculaTunic"),
      this.sotn.getValueByName("godSGarb"),
      this.sotn.getValueByName("axelordArmor"),
      this.sotn.getValueByName("emptyHead"),
      this.sotn.getValueByName("sunglasses"),
      this.sotn.getValueByName("ballroomMask"),
      this.sotn.getValueByName("bandanna"),
      this.sotn.getValueByName("feltHat"),
      this.sotn.getValueByName("velvetHat"),
      this.sotn.getValueByName("goggles"),
      this.sotn.getValueByName("leatherHat"),
      this.sotn.getValueByName("holyGlasses"),
      this.sotn.getValueByName("steelHelm"),
      this.sotn.getValueByName("stoneMask"),
      this.sotn.getValueByName("circlet"),
      this.sotn.getValueByName("goldCirclet"),
      this.sotn.getValueByName("rubyCirclet"),
      this.sotn.getValueByName("opalCirclet"),
      this.sotn.getValueByName("topazCirclet"),
      this.sotn.getValueByName("berylCirclet"),
      this.sotn.getValueByName("catEyeCirclet"),
      this.sotn.getValueByName("coralCirclet"),
      this.sotn.getValueByName("dragonHelm"),
      this.sotn.getValueByName("silverCrown"),
      this.sotn.getValueByName("wizardHat"),
      this.sotn.getValueByName("emptyCloak"),
      this.sotn.getValueByName("clothCloak"),
      this.sotn.getValueByName("reverseCloak"),
      this.sotn.getValueByName("elvenCloak"),
      this.sotn.getValueByName("crystalCloak"),
      this.sotn.getValueByName("royalCloak"),
      this.sotn.getValueByName("bloodCloak"),
      this.sotn.getValueByName("josephsCloak"),
      this.sotn.getValueByName("twilightCloak"),
      this.sotn.getValueByName("emptyRelics"),
      this.sotn.getValueByName("moonstone"),
      this.sotn.getValueByName("sunstone"),
      this.sotn.getValueByName("bloodstone"),
      this.sotn.getValueByName("staurolite"),
      this.sotn.getValueByName("ringOfPales"),
      this.sotn.getValueByName("zircon"),
      this.sotn.getValueByName("aquamarine"),
      this.sotn.getValueByName("turquiose"),
      this.sotn.getValueByName("onyx"),
      this.sotn.getValueByName("garnet"),
      this.sotn.getValueByName("opal"),
      this.sotn.getValueByName("diamond"),
      this.sotn.getValueByName("lapisLazuli"),
      this.sotn.getValueByName("ringOfAres"),
      this.sotn.getValueByName("goldRing"),
      this.sotn.getValueByName("silverRing"),
      this.sotn.getValueByName("ringOfVarda"),
      this.sotn.getValueByName("ringOfArcana"),
      this.sotn.getValueByName("mysticPendant"),
      this.sotn.getValueByName("heartBrooch"),
      this.sotn.getValueByName("necklaceOfJ"),
      this.sotn.getValueByName("gauntlet"),
      this.sotn.getValueByName("ankhOfLife"),
      this.sotn.getValueByName("ringOfFeanor"),
      this.sotn.getValueByName("medal"),
      this.sotn.getValueByName("talisman"),
      this.sotn.getValueByName("duplicator"),
      this.sotn.getValueByName("kingsStone"),
      this.sotn.getValueByName("covenantStone"),
      this.sotn.getValueByName("nauglamir"),
      this.sotn.getValueByName("secretBoots"),
      this.sotn.getValueByName("alucartMail")
    );
    this.arrayOfKeys = Object.keys(this.inventory);
  }

  updateFile(){
    for (var item in this.inventory) {
      this.sotn.setValueByName(item, this.inventory[item]);
    }
    ipcRenderer.send('saveFile', this.fileService.location, this.sotn.getFile());
    ipcRenderer.on('fileSaved', (event) => {
      alert('File was saved.');
      this.router.navigate(['/character']);
    });
  }

  cancelSave(){
    this.router.navigate(['/character']);
  }

}
