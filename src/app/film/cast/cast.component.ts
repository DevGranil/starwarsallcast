import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from 'src/app/models/character.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: '[app-cast]',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit {

  @Input() castUrl: string;

  cast$: Observable<ICharacter>

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    let castUrlSplit = this.castUrl.split('/').filter(el => el != '');
    let id = castUrlSplit.pop();

    this.cast$ = this.apiService.getCharacterById(+id)
  }

}
