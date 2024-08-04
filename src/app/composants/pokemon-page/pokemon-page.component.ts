import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {PokeApiService} from "../../services/poke-api.service";
import {Pokemon} from "../../models/Pokemon";
import {ActivatedRoute, ROUTES} from "@angular/router";
import {Observable} from "rxjs";
import {Specie} from "../../models/Specie";

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {
  private id!:number;
  pokemon$?: Observable<Pokemon>;
  specie$?: Observable<Specie>;

  constructor(@Inject(PokeApiService) private api: PokeApiService, private route: ActivatedRoute) {
      this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.pokemon$ = this.api.getPokemonById(this.id);
    this.pokemon$?.forEach(value => console.log(value));
    this.specie$=this.api.getSpeciesById(this.id);
  }

}
