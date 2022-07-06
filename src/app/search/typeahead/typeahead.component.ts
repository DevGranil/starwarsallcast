import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/character.model';
import { catchError, debounceTime, distinctUntilChanged, Observable, of, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit {
  
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }


  search = (text$: Observable<string>) =>

  // a 200 millisecond gap till emiting search
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    // tap(() => this.searching = true),
    switchMap(term =>
      this.apiService.searchCharacter(term).pipe(
        
        tap((data) =>console.log(data) ),
        // tap(() => this.searchFailed = false),
        catchError(() => {
          // this.searchFailed = true;
          return of([]);
        }))
    ),
    // tap(() => this.searching = false)
  );


  formatter = (result: ICharacter) => result.name;


  click(event: any){
    // this.click$.next(event.target.value)
  }


  select = (event: any) => {
    debugger;
    // let item: ICharacter = event.item
    // if (item.itemType == 'provider') {
    //   this.router.navigate([item.itemHandle])
    // } else {
    //   this.router.navigate(['/find-insurance', this.model, item.itemId])
    // }
  }

}
