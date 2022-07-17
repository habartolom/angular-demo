import { Component, Input, OnInit } from '@angular/core';
import { PokemonModel } from 'src/commons/models/pokemon.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data!: PokemonModel;
  constructor() { }

  ngOnInit(): void {
  }

}
