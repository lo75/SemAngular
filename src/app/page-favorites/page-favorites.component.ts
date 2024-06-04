import { Component } from '@angular/core';
import { Result } from '../character-list/character';
import { Observable } from 'rxjs';
import { CharacterFavoriteService } from '../character-favorite.service';

@Component({
  selector: 'app-page-favorites',
  templateUrl: './page-favorites.component.html',
  styleUrl: './page-favorites.component.scss'
})
export class PageFavoritesComponent {

  favoriteList$: Observable<Result[]>;

  constructor(private favorites:CharacterFavoriteService, private favoritesServ: CharacterFavoriteService){
    this.favoriteList$ = favorites.favoriteList.asObservable();
  }

  removeFavorite(character: Result): void {
    this.favoritesServ.removeToFavorites(character);
  }
}
