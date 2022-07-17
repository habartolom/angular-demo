import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonModel } from 'src/commons/models/pokemon.model';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss']
})
export class AbilityComponent implements OnInit {
  pokemonList: PokemonModel[] = [];
  previous: string | undefined;
  next: string | undefined;
  abilityName: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.abilityName = params.get('name');
      if(this.abilityName){
        this.pokemonService.getAbilityByName(this.abilityName).subscribe(response => {
          response.pokemon.map(x => x.pokemon).forEach(resource => {
            this.pokemonService.getPokemonByName(resource.name).subscribe(resp => {
              this.pokemonList.push(resp);
            })
          })
        })
      }
    })
  }

}
