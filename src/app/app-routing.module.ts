import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageAboutComponent } from './page-about/page-about.component';
import { PageFavoritesComponent } from './page-favorites/page-favorites.component';
import { CharacterListComponent } from './character-list/character-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    component: CharacterListComponent
  },
  {
    path: 'about',
    component: PageAboutComponent
  },
  {
    path: 'favorites',
    component: PageFavoritesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
