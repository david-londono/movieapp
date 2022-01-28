import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'movieapp';
  favorites: any;

  constructor(
    private router: Router) {
      const fav: any = localStorage.getItem('favorites');

      if (fav && fav.length) {
        this.favorites = JSON.parse(fav);
      } else {
        this.favorites = []
      }
      console.log(this.favorites);
      localStorage.setItem('favorites',  JSON.stringify(this.favorites));
  }
}
