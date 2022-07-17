import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonModel } from 'src/commons/models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemonList: PokemonModel[] = [];
  previous: string | undefined;
  next: string | undefined;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.getFirstNPokemons(6).subscribe((response) => {
      this.previous = response.previous;
      this.next = response.next;
      response.results.forEach((resource) => {
        this.pokemonService
          .getPokemonByName(resource.name)
          .subscribe((resp) => {
            this.pokemonList.push(resp);
          });
      });
    });
  }

}
