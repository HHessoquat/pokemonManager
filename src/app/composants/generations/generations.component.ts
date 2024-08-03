import {Component, Inject, OnInit} from '@angular/core';
import {PokeApiService} from "../../services/poke-api.service";
import {Generation} from "../../models/Generation";
import {Observable} from "rxjs";
import {PokemonList} from "../../models/PokemonList";

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
export class GenerationsComponent  {
  generations$: Observable<Generation> | undefined;
  pokemons$?: Observable<PokemonList> | undefined;
  printedGeneration?:number;

  constructor(@Inject(PokeApiService)private  api: PokeApiService) {
    this.generations$ = this.api.getGeneration();
  }
  getPokemons(url:string, i: number) {
      if (this.pokemons$ && this.printedGeneration === i)  {
          this.pokemons$ = undefined;
          this.printedGeneration = 0;
          return;
      }
    this.pokemons$= this.api.getPokemonsByGenerationUrl(url);
    this.printedGeneration = i;
    this.pokemons$?.forEach(v => console.log(v));
    }

}
