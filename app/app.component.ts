import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: 'templates/selectFile.html'
})

export class AppComponent {
  constructor(
    private router: Router
  ) { }

	selectFile(): void {
    this.router.navigate(['/character']);
    //ipcRenderer.send('showOpenDialog');
    //ipcRenderer.on('getFile', (event, arg) => {
      //console.log("/character");
      //this.router.navigate(['/character', arg]);
    //});
	}
}
