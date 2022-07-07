import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './film.routing';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CastComponent } from './cast/cast.component';



@NgModule({
  declarations: [
    FilmComponent,
    CastComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatProgressBarModule
  ]
})
export class FilmModule { }
