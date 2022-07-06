import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICharacter } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  searchCharacter(name: string): Observable<ICharacter[]>{
    return this.http.get(`${environment.api}/people/?search=${name}`).pipe(map((response: any) => response['results']))
  }
}