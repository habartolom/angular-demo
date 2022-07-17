import { ResourceModel } from "./resource.model";

export class AbilityPokemonModel{
  is_hidden!: boolean;
  pokemon!: ResourceModel;
}

export class AbilityModel{
  id!: number;
  name!: string;
  pokemon!: AbilityPokemonModel[];
}
