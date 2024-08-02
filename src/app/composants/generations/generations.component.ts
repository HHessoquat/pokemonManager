import {Component, Inject, OnInit} from '@angular/core';
import {PokeApiService} from "../../services/poke-api.service";
import {Generation} from "../../models/Generation";
import {Observable} from "rxjs";

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
export class GenerationsComponent  {
  generations$: Observable<Generation> | undefined;

  constructor(@Inject(PokeApiService)private  api: PokeApiService) {
    this.generations$ = this.api.getGeneration()
    this.generations$?.forEach(value => console.log(value))
  }


}
