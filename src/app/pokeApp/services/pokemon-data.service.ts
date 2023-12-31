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

  private favorites: string | null = null;
  private favoritesSubject = new BehaviorSubject<string | null>(null);
  public favorites$ = this.favoritesSubject.asObservable();

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
  // addToFavorites(pokemonName: string): void {
  //   if (!this.favorites.includes(pokemonName)) {
  //     this.favorites.push(pokemonName);
  //     this.favoritesSubject.next(this.favorites);
  //   }
  // }
  addToFavorites(pokemonName: string | null): void {
    this.favorites = pokemonName; // Actualiza el Pokémon favorito actual
    this.favoritesSubject.next(pokemonName); // Emite el cambio a los suscriptores
  }

  // Método para quitar un Pokémon de favoritos
  // removeFromFavorites(pokemonName: string): void {
  //   const index = this.favorites.indexOf(pokemonName);
  //   if (index !== -1) {
  //     this.favorites.splice(index, 1);
  //     this.favoritesSubject.next(this.favorites);
  //   }
  // }
  getFavorites(pokemonName: string): boolean {
    return this.favorites === pokemonName;
  }
}
