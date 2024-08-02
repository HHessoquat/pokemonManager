import {Component, Inject, OnInit} from '@angular/core';
import {Pokemon} from "../../models/Pokemon";
import {PokeApiService} from "../../services/poke-api.service";
import {PokemonList} from "../../models/PokemonList";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {
  pokemons$: Observable<PokemonList> | undefined;
  constructor(@Inject(PokeApiService) private api: PokeApiService) {
    this.pokemons$ = this.api.getPokemons()
  }



}
