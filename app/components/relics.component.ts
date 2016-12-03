import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';
import { Router, ActivatedRoute } from '@angular/router';
import { FileService } from '../services/file.service';
import { SOTN } from '../custom/sotn';
import { Relics } from '../models/relics';

@Component({
  selector: 'app',
  templateUrl: 'templates/relics.html'
})

export class RelicsComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fileService: FileService,
    private sotn: SOTN
  ) {}

  public relics: Relics;
  public arrayOfKeys;

  ngOnInit() {
    this.sotn.setFile(this.fileService.file);
    this.relics = new Relics(
      this.sotn.getValueByName("soulOfBat"),
      this.sotn.getValueByName("fireOfBat"),
      this.sotn.getValueByName("echoOfBat"),
      this.sotn.getValueByName("forceOfEcho"),
      this.sotn.getValueByName("soulOfWolf"),
      this.sotn.getValueByName("powerOfWolf"),
      this.sotn.getValueByName("skillOfWolf"),
      this.sotn.getValueByName("formOfMist"),
      this.sotn.getValueByName("powerOfMist"),
      this.sotn.getValueByName("gasCloud"),
      this.sotn.getValueByName("cubeOfZoe"),
      this.sotn.getValueByName("spiritOrb"),
      this.sotn.getValueByName("gravityBoots"),
      this.sotn.getValueByName("leapStone"),
      this.sotn.getValueByName("holySymbol"),
      this.sotn.getValueByName("faerieScroll"),
      this.sotn.getValueByName("jewelOfOpen"),
      this.sotn.getValueByName("mermanStatue"),
      this.sotn.getValueByName("batCard"),
      this.sotn.getValueByName("ghostCard"),
      this.sotn.getValueByName("faerieCard"),
      this.sotn.getValueByName("demonCard"),
      this.sotn.getValueByName("swordCard"),
      this.sotn.getValueByName("heartOfVlad"),
      this.sotn.getValueByName("toothOfVlad"),
      this.sotn.getValueByName("ribOfVlad"),
      this.sotn.getValueByName("ringOfVlad"),
      this.sotn.getValueByName("eyeOfVlad")
    );
    this.arrayOfKeys = Object.keys(this.relics);
  }

  updateFile(){
    for (var item in this.relics) {
      this.sotn.setValueByName(item, this.relics[item]);
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
