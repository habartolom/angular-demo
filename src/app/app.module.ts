import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonService } from './services/pokemon.service';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { AbilitiesComponent, FilterAbilities } from './pages/abilities/abilities.component';
import { AbilityComponent } from './pages/ability/ability.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    PokemonsComponent,
    AbilitiesComponent,
    FilterAbilities,
    AbilityComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
