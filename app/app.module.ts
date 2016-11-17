import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent }   from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent }
]

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
