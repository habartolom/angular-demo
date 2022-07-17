import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AbilitiesComponent } from './pages/abilities/abilities.component';
import { AbilityComponent } from './pages/ability/ability.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'abilities',
    children: [
      {
        path: '',
        component: AbilitiesComponent
      },
      {
        path: ':name',
        component: AbilityComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
