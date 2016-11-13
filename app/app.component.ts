/// <reference path="../node_modules/@types/electron/index.d.ts" />
/// <reference path="../node_modules/@types/node/index.d.ts" />

import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';

@Component({
  selector: 'app',
  template: `
    <a href="#" id="fileselect" (click)="doSomething();"></a>
  `
})
export class AppComponent {
	doSomething() {
		ipcRenderer.send('showOpenDialog');
	}
}
