import {Component, Inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PokeApiService} from "../../services/poke-api.service";
import {PokemonList} from "../../models/PokemonList";
import {map, Observable, tap} from "rxjs";


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, OnChanges {
  @Input() pokemons$: Observable<PokemonList> | undefined;
  constructor(@Inject(PokeApiService) private api: PokeApiService) {

  }

  ngOnInit(): void {
    if (!this.pokemons$) {
      this.pokemons$ = this.api.getPokemons();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemons$'] && changes['pokemons$'].currentValue === undefined) {
      this.pokemons$ = this.api.getPokemons();
    }
  }
}
