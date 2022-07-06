import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICharacter } from '../models/character.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character$: Observable<ICharacter>

  constructor(
    private apiSevice: ApiService,
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let {character} =  this.activeRouter.snapshot.params;
    this.character$ = this.apiSevice.getCharacter(character)
   
  }

}
