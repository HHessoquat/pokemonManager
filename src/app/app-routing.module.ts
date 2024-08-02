import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {GenerationsComponent} from "./composants/generations/generations.component";
import {PokemonsComponent} from "./composants/pokemons/pokemons.component";

const routes: Routes = [
  {path: '', component: GenerationsComponent},
  {path: 'generations', component: GenerationsComponent},
  {path: 'pokemons', component: PokemonsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
