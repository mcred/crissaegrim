import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';

@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>'
})

export class AppComponent {
}
