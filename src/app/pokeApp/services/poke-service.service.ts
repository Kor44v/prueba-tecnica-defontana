import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { PokeApp } from '../interfaces/pokeApp.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private _serviceUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  public response: any = [];
  constructor(private http: HttpClient) {}
  searchPokemon(): Observable<PokeApp> {
    return this.http.get<PokeApp>(`${this._serviceUrl}`);
  }
  searchPokemonDetail(query: string): Observable<PokeApp> {
    query = query.trim().toLowerCase();

    return this.http.get<PokeApp>(`${this._serviceUrl}${query}`);
  }
}
