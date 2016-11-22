import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ipcRenderer } from 'electron';

@Component({
  selector: 'app',
  templateUrl: 'templates/selectFile.html'
})

export class SelectFileComponent {
  constructor(private router: Router){

  }

  selectFile(){
    this.router.navigate(['/character']);
  }
}
