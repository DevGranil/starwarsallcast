import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './character.routing';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FeaturedInComponent } from './featured-in/featured-in.component';



@NgModule({
  declarations: [
    CharacterComponent,
    FeaturedInComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatProgressBarModule
  ]
})
export class CharacterModule { }
