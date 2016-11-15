import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';

@Component({
  selector: 'app',
  templateUrl: 'templates/selectFile.html'
})

export class AppComponent {
	selectFile() {
		var hexstring = ipcRenderer.send('showOpenDialog');
    console.log(hexstring);
	}
}
