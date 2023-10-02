import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from '../../services/pokemon-data.service';
import { PokeService } from '../../services/poke-service.service';
import { Pokedex } from '../../interfaces/UniquePokemon.interface';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  currentFavorite: string | null = null;
  favoritePokemon: any | null = null;
  constructor(
    private pokemonServiceData: PokemonDataService,
    private pokeService: PokeService
  ) {}

  ngOnInit(): void {
    this.pokemonServiceData.favorites$.subscribe((favorite) => {
      this.currentFavorite = favorite;
      if (this.currentFavorite) {
        this.searchFavoritePokemonDetails(this.currentFavorite);
      }
    });
  }
  searchFavoritePokemonDetails(pokemonName: string): void {
    this.pokeService
      .searchPokemonDetail(pokemonName)
      .subscribe((favPokemon: any) => {
        this.favoritePokemon = favPokemon;
      });
  }
}
