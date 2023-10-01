import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { PokeService } from '../../services/poke-service.service';
import { Result } from '../../interfaces/pokeApp.interface';
import { Pokedex } from '../../interfaces/UniquePokemon.interface';
import { PokemonDataService } from '../../services/pokemon-data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Result[] = [];
  pokeDetail: Pokedex[] = [];

  displayedColumns: string[] = ['name', 'height'];

  dataSource: MatTableDataSource<Result>;
  @ViewChild(MatPaginator) paginator!: MatPaginator; //solo si estoy seguro de que se inicializará en otro lugar
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private pokemonService: PokeService,
    private pokemonDataService: PokemonDataService
  ) {
    this.dataSource = new MatTableDataSource<Result>([]);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.searchPokemon();
  }
  searchPokemon(): void {
    this.pokemonService.searchPokemon().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Result>(data.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  searchPokemonDetails(pokemonName: string): void {
    this.pokemonService.searchPokemonDetail(pokemonName).subscribe((data) => {
      console.log(data);
      this.pokemonDataService.setPokemonData(data);
    });
  }
}
