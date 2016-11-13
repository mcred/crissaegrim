import { Component } from '@angular/core';
@Component({
  selector: 'app',
  template: `
    <a href="#" id="fileselect" (click)="showOpenDialog();"></a>
  `
})
export class AppComponent {
  showOpenDialog() {
    alert('hi');
  }
}
