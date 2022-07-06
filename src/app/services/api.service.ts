import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICharacter } from '../models/character.model';
import { IFilm } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  searchCharacters(name: string): Observable<ICharacter[]>{
    return this.http.get(`${environment.api}/people/?search=${name}`).pipe(map((response: any) => response['results']))
  }

  getCharacter(name: string): Observable<ICharacter>{
    return this.http.get(`${environment.api}/people/?search=${name}`).pipe(map((response: any) => response['results'][0]))

  }


  getFeaturedFilm(id: number): Observable<IFilm>{
    return this.http.get(`${environment.api}/filsm${1}`).pipe(map((response: any) => response))

  }
}
