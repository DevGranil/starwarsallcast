import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/character.model';
import { catchError, debounceTime, distinctUntilChanged, Observable, of, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit {
  searching: boolean = false;
  searchFailed: boolean = false;
  
  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  search = (text$: Observable<string>) =>

  // a 200 millisecond gap till emiting search
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    tap(() => this.searching = true),
    switchMap(term =>
      this.apiService.searchCharacters(term).pipe(
        tap((data) => {
          console.log(data);
          this.searchFailed = false 

          if(data.length == 0) this.searchFailed = true
        }),
        catchError(() => {
          this.searchFailed = true;
          return of([]);
        }))
    ),
    tap(() => this.searching = false)
  );


  formatter = (result: ICharacter) => result.name;

  select = (event: any) => {
    let item: ICharacter = event.item
    this.router.navigate([item.name])
  }

}
