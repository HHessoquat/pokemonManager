import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {PokeApiService} from "../../services/poke-api.service";
import {Pokemon} from "../../models/Pokemon";
import {ROUTES} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {
  private id!:number;
  pokemon?: Observable<Pokemon>;
  constructor(@Inject(PokeApiService) private api: PokeApiService) {}

  ngOnInit(): void {
    this.pokemon = this.api.getPokemonById(this.id);
  }

}
