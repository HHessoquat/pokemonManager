import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {PokeApiService} from "../../services/poke-api.service";
import {Pokemon} from "../../models/Pokemon";
import {ROUTES} from "@angular/router";

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {
  pokemon?: Pokemon;
  constructor(@Inject(PokeApiService) private api: PokeApiService) {}

  ngOnInit(): void {
    // this.pokemon = this.api.getPokemons()
  }

}
