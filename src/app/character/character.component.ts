import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activeRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let {character} =  this.activeRouter.snapshot.params;
    this.character$ = this.apiSevice.getCharacter(character)
   
  }


  filmClicked(filmUrl: string){
    let filmUrlSplit = filmUrl.split('/').filter(el => el != '');
    let id = filmUrlSplit.pop();

    this.router.navigate(['film', id])

  }

}
