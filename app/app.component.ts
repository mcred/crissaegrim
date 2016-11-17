import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';

@Component({
  selector: 'app',
  templateUrl: 'templates/selectFile.html'
})

export class AppComponent {
  saveFile = '';
	selectFile() {
    ipcRenderer.send('showOpenDialog');
    ipcRenderer.on('getFile', (event, arg) => {
      this.saveFile = arg;
    });
	}
}
