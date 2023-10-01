import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from '../../services/pokemon-data.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  pokemonData: any = '';

  constructor(private pokemonDataService: PokemonDataService) {}

  ngOnInit(): void {
    this.getPokemonData();
  }

  getPokemonData(): void {
    this.pokemonDataService.getPokemonData().subscribe((data) => {
      this.pokemonData = data;
    });
  }
}
