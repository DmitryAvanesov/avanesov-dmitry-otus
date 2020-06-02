import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { RouterModule } from '@angular/router';
import { GoComponent } from './go/go.component';
import { SettingsComponent } from './settings/settings.component';
import { AddWordsComponent } from './add-words/add-words.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentlyAddedComponent,
    GoComponent,
    SettingsComponent,
    AddWordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }