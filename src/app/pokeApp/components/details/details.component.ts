import { Component } from '@angular/core';
import { PokeService } from '../../services/poke-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  pokemonCountByLetter: { [letter: string]: number } = {};

  constructor(private pokemonService: PokeService) {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService.searchPokemon().subscribe((pokemonList) => {
      // Procesa la lista de Pokémon y actualiza pokemonCountByLetter

      pokemonList.forEach((pokemon) => {
        const firstLetter = pokemon.name.charAt(0).toUpperCase();
        if (!this.pokemonCountByLetter[firstLetter]) {
          this.pokemonCountByLetter[firstLetter] = 1;
        } else {
          this.pokemonCountByLetter[firstLetter]++;
        }
      });
    });
  }
}
