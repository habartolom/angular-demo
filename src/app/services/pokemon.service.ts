import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginationModel } from 'src/commons/models/pagination.model';
import { PokemonModel } from 'src/commons/models/pokemon.model';
import { AbilityModel } from 'src/commons/models/ability.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(
    private httpClient : HttpClient
  ) { }

  getResources(url: string): Observable<PaginationModel>{
    return this.httpClient.get<PaginationModel>(url);
  }

  getFirstNPokemons(quantity: number): Observable<PaginationModel>{
    const apiEndPoint = `pokemon?limit=${quantity}&offset=0`;
    return this.getResources(`${this.baseUrl}${apiEndPoint}`);
  }

  getPokemonByName(name: string): Observable<PokemonModel>{
    const apiEndPoint = `pokemon/${name}`
    return this.httpClient.get<PokemonModel>(`${this.baseUrl}${apiEndPoint}`);
  }

  getFirstNAbilities(quantity: number): Observable<PaginationModel>{
    const apiEndPoint = `ability?limit=${quantity}&offset=0`;
    return this.getResources(`${this.baseUrl}${apiEndPoint}`);
  }

  getAbilityByName(name: string): Observable<AbilityModel>{
    const apiEndPoint = `ability/${name}`;
    return this.httpClient.get<AbilityModel>(`${this.baseUrl}${apiEndPoint}`);
  }

}
