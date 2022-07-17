import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ResourceModel } from 'src/commons/models/resource.model';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {
abilitiesList: ResourceModel[] = [];
filteredAbility: string;

  constructor(
    private pokemonService: PokemonService
  ) {
    this.filteredAbility = '';
  }

  ngOnInit(): void {
    this.pokemonService.getFirstNAbilities(327).subscribe((response) => {
      this.abilitiesList = response.results;
    });
  }

}

@Pipe({name: 'filterByAbility'})
export class FilterAbilities implements PipeTransform {
  transform(abilitiesList: ResourceModel[], filteredAbility:string): ResourceModel[]{
    if(!abilitiesList) return [];
    if(!filteredAbility) return abilitiesList;

    return abilitiesList.filter(x => x.name.indexOf(filteredAbility) >= 0);
  }
}
