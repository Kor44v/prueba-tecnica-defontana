import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokeService } from '../../services/poke-service.service';
import { PokemonDataService } from '../../services/pokemon-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchControl = new FormControl();

  constructor(
    private pokemonService: PokeService,
    private pokemonDataService: PokemonDataService
  ) {
    this.searchControl.valueChanges.subscribe((value) => {
      this.pokemonService.searchPokemon(value).subscribe((data) => {
        this.pokemonDataService.setSearchResults(data); // Guarda los resultados de búsqueda
      });
    });
  }
  search(): void {
    const searchTerm = this.searchControl.value;
    this.pokemonDataService.setSearchTerm(searchTerm);
  }
}
