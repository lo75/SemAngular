import { Injectable } from '@angular/core';
import { Result } from './character-list/character';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterFavoriteService {

  private _favoriteList: Result[] = [];

  favoriteList: BehaviorSubject<Result[]> = new BehaviorSubject(this._favoriteList);

  constructor() { }

  addToFavorites(character: Result) {
    let item: Result = this._favoriteList.find((v1) => v1.name == character.name)!;
    if (!item) {
      this._favoriteList.push({...character});
    } 

    this.favoriteList.next(this._favoriteList);
  }

  removeToFavorites(character: Result) {
    let index = this._favoriteList.indexOf(character);
    this._favoriteList.splice(index, 1);
    this.favoriteList.next(this._favoriteList);
    
  }
  
}
