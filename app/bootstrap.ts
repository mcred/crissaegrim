import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent }   from './components/app.component';
import { CharacterComponent }   from './components/character.component';
import { SelectFileComponent }  from './components/selectfile.component';

import { FileService } from './services/file.service';
import { SOTN } from './custom/sotn';

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
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, FileService, SOTN],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
