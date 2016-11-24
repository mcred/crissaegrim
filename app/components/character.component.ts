import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../services/file.service';

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
    private fileService: FileService
  ) {}

  ngOnInit() {
    this.file = this.fileService.file;
    console.log(this.fileService.file);
    this.hp = this.file[parseInt("0x2474")];
    this.hpmax = this.file[parseInt("0x2478")];
    this.mp = this.file[parseInt("0x2484")];
    this.mpmax = this.file[parseInt("0x2488")];
  }

}
