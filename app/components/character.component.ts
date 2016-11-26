import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';
import { Router, ActivatedRoute } from '@angular/router';
import { FileService } from '../services/file.service';
import { SOTN } from '../custom/sotn';
import { Alucard } from '../models/alucard';

@Component({
  selector: 'app',
  templateUrl: 'templates/character.html'
})

export class CharacterComponent {
  constructor(
    private router: Router,
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

  updateFile(){
    for (var stat in this.alucard)
    {
      this.sotn.setValueByName(stat, this.alucard[stat]);
    }
    ipcRenderer.send('saveFile', this.fileService.location, this.sotn.getFile());
    ipcRenderer.on('fileSaved', (event) => {
      //this.router.navigate(['/']);
    });
    console.log(this.fileService.location);
    console.log(this.alucard);
  }
}
