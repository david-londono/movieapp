import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

  movieList: any;
  baseImgUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.movieList = localStorage.getItem('favorites');
    this.movieList = JSON.parse(this.movieList);
  }

  goToOverview(movie: any) {
    this.router.navigate([`/overview/${movie.title}/${movie.id}`])
  }

  addToFavorites(movie: any) {
    this.movieList.forEach((el: any, index: number) => {
      if (el.title === movie.title) {
        this.movieList.splice(index, 1);
        movie.favorite = false;
      } 
    });

    localStorage.setItem('favorites', JSON.stringify(this.movieList));
  }
}
