import { TestBed } from '@angular/core/testing';

import { CharacterFavoriteService } from './character-favorite.service';

describe('CharacterFavoriteService', () => {
  let service: CharacterFavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterFavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
