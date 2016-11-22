import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent }   from './app.component';
import { CharacterComponent }   from './character.component';
import { SelectFileComponent }  from './selectfile.component';

const routes: Routes = [
  { path: '', redirectTo: 'selectfile', pathMatch: 'full'},
  { path: 'character', component: CharacterComponent },
  { path: 'selectfile', component: SelectFileComponent }
]

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    CharacterComponent,
    SelectFileComponent
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
