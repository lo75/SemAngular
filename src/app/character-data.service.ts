import { Injectable } from '@angular/core';
import { Root } from './character-list/character';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL = 'https://rickandmortyapi.com/api/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Root> {
    return this.http.get<Root>(URL);
  }


}
