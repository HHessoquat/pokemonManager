import {Inject, Injectable} from '@angular/core';
import {map, Observable, take} from "rxjs";
import {Pokemon} from "../models/Pokemon";
import {HttpClient} from "@angular/common/http";
import {Generation} from "../models/Generation";
import {PokemonList} from "../models/PokemonList";
import {PokemonUrl} from "../models/PokemonUrl";
import {Specie} from "../models/Specie";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private baseUrl: string = 'https://pokeapi.co/api/v2';

  constructor(@Inject(HttpClient) private http: HttpClient) {}

  getGeneration():Observable<Generation> | undefined {
    return this.http.get<Generation>(`${this.baseUrl}/generation`);
  }
  getPokemonsByGenerationUrl(url: string): Observable<PokemonList> | undefined {
    const generation = this.http.get<any>(url);
    return generation.pipe(
      map(g => {
        return {
          results :  g.pokemon_species.map((urlObject: PokemonUrl) => {
            return {
              name: urlObject.name,
              url: urlObject.url.replace(/-species/g, '')
            };
          })
        };
      })
    );
  }
  getPokemons():Observable<PokemonList> | undefined {
    return this.http.get<PokemonList>(`${this.baseUrl}/pokemon`);
  }
  getPokemonbyUrl(url:string):Observable<Pokemon> | undefined {
    return this.http.get<Pokemon>(url);
  }
  getPokemonById(id:number):Observable<Pokemon> | undefined {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${id}`);
  }

  getSpeciesById(id:number):Observable<Specie> | undefined {
      return this.http.get<Specie>(`${this.baseUrl}/pokemon-species/${id}`);
  }
}
