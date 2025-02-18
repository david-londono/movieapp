import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'movieapp';
  favorites: any;

  constructor() {
      const fav: any = localStorage.getItem('favorites');
      if (fav && fav.length) {
        this.favorites = JSON.parse(fav);
      } else {
        this.favorites = []
      }
      localStorage.setItem('favorites',  JSON.stringify(this.favorites));
  }
}
