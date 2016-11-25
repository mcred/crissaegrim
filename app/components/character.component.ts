import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../services/file.service';
import { SOTN } from '../custom/sotn';
import { Alucard } from '../models/alucard';

@Component({
  selector: 'app',
  templateUrl: 'templates/character.html'
})

export class CharacterComponent {
  constructor(
    private route: ActivatedRoute,
    private fileService: FileService,
    private sotn: SOTN
  ) {}

  public alucard: Alucard;

  ngOnInit() {
    this.sotn.setFile(this.fileService.file);
    this.alucard = new Alucard(
      this.sotn.getValueByName('HP'),
      this.sotn.getValueByName('HPMAX'),
      this.sotn.getValueByName('MP'),
      this.sotn.getValueByName('MPMAX'),
      this.sotn.getValueByName('HEARTS'),
      this.sotn.getValueByName('HEARTMAX'),
      this.sotn.getValueByName('STR'),
      this.sotn.getValueByName('CON'),
      this.sotn.getValueByName('INT'),
      this.sotn.getValueByName('LCK')
    );
  }

  logChanges(){
    console.log(this.alucard);
  }
}
