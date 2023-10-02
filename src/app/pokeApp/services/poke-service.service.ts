import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { PokeApp, Result } from '../interfaces/pokeApp.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private _serviceUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  public response: any = [];

  constructor(private http: HttpClient) {}
  searchPokemon(query: string = ''): Observable<Result[]> {
    return this.http.get<PokeApp>(`${this._serviceUrl}`).pipe(
      map((data) => {
        // Filtra la lista de acuerdo al término de búsqueda proporcionado
        const searchTerm = query.trim().toLowerCase();
        return data.results.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm)
        );
      })
    );
  }
  searchPokemonDetail(name: string): Observable<PokeApp> {
    name = name.trim().toLowerCase();

    return this.http.get<PokeApp>(`${this._serviceUrl}${name}`);
  }
}
