import {Component, Inject, Input, OnInit} from '@angular/core';
import {PokeApiService} from "../../services/poke-api.service";
import {Pokemon} from "../../models/Pokemon";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() url:string = "https://pokeapi.co/api/v2/pokemon/1";
  pokemon$!: Observable<Pokemon> | undefined;
  constructor(@Inject(PokeApiService) private api: PokeApiService) { }

  ngOnInit(): void {
    this.pokemon$ = this.api.getPokemon(this.url);
  }

}
