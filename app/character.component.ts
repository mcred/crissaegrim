import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: 'templates/character.html'
})

export class CharacterComponent {
  hp: string;
  hpmax: string;
  file: string;
  private sub: any;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.file = params['file'];
    });
    console.log(parseInt("0x2474"));
    console.log(this.file[9332]);
    this.hp = this.file.charAt(parseInt("0x2474"));
    this.hpmax = this.file.charAt(parseInt("0x248"));
  }

}
