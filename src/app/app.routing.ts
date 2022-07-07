import { Routes } from "@angular/router";

export const routes: Routes = [
    {path: '', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)},

    {path: ':character', loadChildren: () => import('./character/character.module').then(m => m.CharacterModule)},
    
    {path: 'film/:id', loadChildren: () => import('./film/film.module').then(m => m.FilmModule)},
]