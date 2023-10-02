import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  private _pokemonData = new BehaviorSubject<any>(null);
  private _searchResults = new BehaviorSubject<any>(null);
  private searchTermSubject = new BehaviorSubject<string>('');
  public searchTerm$ = this.searchTermSubject.asObservable();

  getPokemonData() {
    return this._pokemonData.asObservable();
  }

  setPokemonData(data: any) {
    this._pokemonData.next(data);
  }

  getSearchResults() {
    return this._searchResults.asObservable();
  }

  setSearchResults(data: any) {
    this._searchResults.next(data);
  }
  setSearchTerm(searchTerm: string): void {
    this.searchTermSubject.next(searchTerm);
  }
}
