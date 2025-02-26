import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { animations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: animations
})

export class AppComponent {
  title = 'movieapp';
  favorites: any;

  constructor(public router: Router) {
    const fav: any = localStorage.getItem('favorites');
    if (fav && fav.length) {
      this.favorites = JSON.parse(fav);
    } else {
      this.favorites = []
    }
    localStorage.setItem('favorites',  JSON.stringify(this.favorites));
  }

  search(e: any) {
    console.log(e);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
