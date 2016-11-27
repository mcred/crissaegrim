import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {FormsModule} from "@angular/forms";

import { AppComponent }   from './components/app.component';
import { CharacterComponent }   from './components/character.component';
import { InventoryComponent }   from './components/inventory.component';
import { SelectFileComponent }  from './components/selectfile.component';

import { FileService } from './services/file.service';
import { SOTN } from './custom/sotn';

const routes: Routes = [
  { path: '', redirectTo: 'selectfile', pathMatch: 'full'},
  { path: 'character', component: CharacterComponent },
  { path: 'selectfile', component: SelectFileComponent },
  { path: 'inventory', component: InventoryComponent }
]

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [
    AppComponent,
    CharacterComponent,
    SelectFileComponent,
    InventoryComponent
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, FileService, SOTN],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
