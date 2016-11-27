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
    });
  }

  cancelSave(){
    this.router.navigate(['/character']);
  }

}
