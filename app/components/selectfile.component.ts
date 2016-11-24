import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ipcRenderer } from 'electron';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app',
  templateUrl: 'templates/selectFile.html'
})

export class SelectFileComponent {
  constructor(
    private router: Router,
    private fileService: FileService
  ){

  }

  selectFile(){
    ipcRenderer.send('showOpenDialog');
    ipcRenderer.on('getFile', (event, arg) => {
      this.fileService.file = arg;
      this.router.navigate(['/character']);
    });
  }
}
