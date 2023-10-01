import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  private _pokemonData = new BehaviorSubject<any>(null);

  getPokemonData() {
    return this._pokemonData.asObservable();
  }

  setPokemonData(data: any) {
    this._pokemonData.next(data);
  }
}
