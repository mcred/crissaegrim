import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../services/file.service';
import { SOTN } from '../custom/sotn';

@Component({
  selector: 'app',
  templateUrl: 'templates/character.html'
})

export class CharacterComponent {
  file: any;
  hp: string;
  hpmax: string;
  mp: string;
  mpmax: string;

  constructor(
    private route: ActivatedRoute,
    private fileService: FileService,
    private sotn: SOTN
  ) {}

  ngOnInit() {
    this.sotn.setFile(this.fileService.file);
    this.hp = this.sotn.getValueByName('HP');
    this.hpmax = this.sotn.getValueByName('HPMAX');
    this.mp = this.sotn.getValueByName('MP');
    this.mpmax = this.sotn.getValueByName('MPMAX');
  }

}
