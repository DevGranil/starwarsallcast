import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFilm } from 'src/app/models/film.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: '[app-featured-in]',
  templateUrl: './featured-in.component.html',
  styleUrls: ['./featured-in.component.scss']
})
export class FeaturedInComponent implements OnInit {
  @Input() filmUrl: string;

  film: Observable<IFilm>

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    // split string and remove white spacess in array
    let filmUrlSplit = this.filmUrl.split('/').filter(el => el != '');
    let id = filmUrlSplit.pop();

    this.film = this.apiService.getFeaturedFilm(+id)

  }



}
