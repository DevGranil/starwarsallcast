import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICharacter } from '../models/character.model';
import { IFilm } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  //character api doesn't return an error
  characterDoesNotExist = new Subject<boolean>()

  constructor(
    private http: HttpClient
  ) { }

  searchCharacters(name: string): Observable<ICharacter[]>{
    return this.http.get(`${environment.api}/people/?search=${name}`).pipe(map((response: any) => response['results']))
  }

  getCharacter(name: string): Observable<ICharacter>{
    return this.http.get(`${environment.api}/people/?search=${name}`).pipe(map((response: any) => {
      if(response['results'].length > 0){
        return response['results'][0]
      } else {
        this.characterDoesNotExist.next(true)
        return throwError('error')
      }
    }))
  }

  getCharacterById(id: number): Observable<ICharacter>{
    return this.http.get(`${environment.api}/people/${id}`).pipe
    (map((response: any) => response), 
    catchError((err, caught) => of(err))
    )
  }


  getFeaturedFilm(id: number): Observable<IFilm>{
    return this.http.get(`${environment.api}/films/${id}`).pipe
    (map((response: any) => response), 
    catchError((err, caught) => of(err))
    )

  }
}
