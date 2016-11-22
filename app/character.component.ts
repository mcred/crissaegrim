import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';
import { ActivatedRoute } from '@angular/router';
import { FileService } from './file.service';

@Component({
  selector: 'app',
  templateUrl: 'templates/character.html'
})

export class CharacterComponent {
  hp: string;
  hpmax: string;

  constructor(
    private route: ActivatedRoute,
    private fileService: FileService
  ) {}

  ngOnInit() {
    console.log(this.fileService.file);
    this.hp = this.fileService.file[parseInt("0x2474")];
    this.hpmax = this.fileService.file[parseInt("0x2478")];
  }

}
