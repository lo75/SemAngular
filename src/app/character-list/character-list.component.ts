import { Component } from '@angular/core';
import { Result } from './character';
import { CharacterFavoriteService } from '../character-favorite.service';
import { CharacterDataService } from '../character-data.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent {
  characters: Result[] = [];

  constructor(private favorites: CharacterFavoriteService, private characterService: CharacterDataService){

  };

  ngOnInit(): void {
    this.characterService.getAll().subscribe(result => this.characters = result.results);
  }

  addFavorite(character: Result): void {
    this.favorites.addToFavorites(character);
  }
}
