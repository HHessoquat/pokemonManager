import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Pokemon} from "../models/Pokemon";
import {HttpClient} from "@angular/common/http";
import {Generation} from "../models/Generation";
import {PokemonList} from "../models/PokemonList";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private baseUrl: string = 'https://pokeapi.co/api/v2';

  constructor(@Inject(HttpClient) private http: HttpClient) {}

  getGeneration():Observable<Generation> | undefined {
    return this.http.get<Generation>(`${this.baseUrl}/generation`);
  }

  getPokemons():Observable<PokemonList> | undefined {
    return this.http.get<PokemonList>(`${this.baseUrl}/pokemon`);
  }
  getPokemon(url:string):Observable<Pokemon> | undefined {
    return this.http.get<Pokemon>(url);
  }
}
