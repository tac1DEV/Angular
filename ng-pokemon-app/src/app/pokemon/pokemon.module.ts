import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';
import { AppModule } from "../app.module";

const pokemonRoutes: Routes = [
  { path: 'edit/pokemon/:id', component: EditPokemonComponent, canActivate: [AuthGuard]},
  { path: 'pokemon/add', component: AddPokemonComponent, canActivate: [AuthGuard]},
  { path: 'pokemons', component: ListPokemonComponent},
  { path: 'pokemon/:id', component: DetailPokemonComponent}
];

@NgModule({
    declarations: [
        BorderCardDirective,
        PokemonTypeColorPipe,
        ListPokemonComponent,
        DetailPokemonComponent,
        PokemonFormComponent,
        EditPokemonComponent,
        AddPokemonComponent,
        SearchPokemonComponent,
        LoaderComponent
    ],
    providers: [PokemonService],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(pokemonRoutes),
        AppModule
    ]
})
export class PokemonModule { }
