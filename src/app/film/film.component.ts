import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { IFilm } from '../models/film.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  film$: Observable<IFilm>

  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    let {id} = this.activeRoute.snapshot.params

    this.film$ = this.apiService.getFeaturedFilm(id).pipe()
    }

}
