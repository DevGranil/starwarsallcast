import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition('* <=> *', [
        style({opacity: 0}),
        animate('500ms')
      ])
    ]),
  ]
})
export class AppComponent{
  title = 'starwars-allcast';


  prepareRoute(outlet: RouterOutlet){
    if(outlet.isActivated) return outlet.activatedRoute.snapshot.url
    return false;
    
  }
}
