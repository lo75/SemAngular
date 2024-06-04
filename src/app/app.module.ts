import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageCharactersComponent } from './page-characters/page-characters.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PageFavoritesComponent } from './page-favorites/page-favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAboutComponent,
    PageCharactersComponent,
    CharacterListComponent,
    PageFavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
