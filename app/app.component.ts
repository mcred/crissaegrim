/// <reference path="../node_modules/@types/electron/index.d.ts" />
/// <reference path="../node_modules/@types/node/index.d.ts" />

import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';

@Component({
  selector: 'app',
  template: `
    <div id="selectFile">
      <a href="#" id="fileselect" (click)="doSomething();"></a>
    </div>
  `
})
export class AppComponent {
	doSomething() {
		var hexstring = ipcRenderer.send('showOpenDialog');
    console.log(hexstring);
	}
}
