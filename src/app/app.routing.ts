import { Routes } from "@angular/router";

export const routes: Routes = [
    {path: "", loadChildren: () => import('./search/search.module').then(m => m.SearchModule)}
]