import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from '../../services/pokemon-data.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  currentFavorite: string[] | null = null;
  constructor(private pokemonServiceData: PokemonDataService) {}

  ngOnInit(): void {
    // Suscríbete al observable currentFavorite$
    this.pokemonServiceData.favorites$.subscribe((favorite) => {
      this.currentFavorite = favorite;
      console.log(this.currentFavorite, 'favorite');
    });
  }
}
