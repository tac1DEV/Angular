import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch:'full'},
  { path: 'pokemons', component: ListPokemonComponent},  
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
