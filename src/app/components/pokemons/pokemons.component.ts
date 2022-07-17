import { Component, Input, OnInit } from '@angular/core';
import { PokemonModel } from 'src/commons/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  @Input() pokemonList: PokemonModel[] = [];
  @Input() previous: string | undefined;
  @Input() next: string | undefined;

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {

  }

  goBack(){
    if(this.previous){
      this.loadData(this.previous);
    }
  }

  goForward(){
    if(this.next){
      this.loadData(this.next);
    }
  }

  loadData(url: string){
    this.pokemonService.getResources(url).subscribe(response => {
      this.previous = response.previous;
      this.next = response.next;
      this.pokemonList = [];
      response.results.forEach(resource => {
        this.pokemonService.getPokemonByName(resource.name).subscribe(resp => {
          this.pokemonList.push(resp);
        })
      })
    });
  }
}
