import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';
import { routes } from './search.routing';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { SharedModule } from '../shared/shared.module';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    SearchComponent,
    TypeaheadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgbTypeaheadModule,
  ],
  exports: []
})
export class SearchModule { }
