import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showFiller = true;
  movieList: any[] = [];
  movie = '';
  baseImgUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
  favorites: any;

  constructor(
    private movieService: MovieService,
    private router: Router) { }

  ngOnInit(): void {
  }

  search(event: any) {
    let fav: any = localStorage.getItem('favorites');
    fav = JSON.parse(fav);
    this.movieService.getMovieSearch(event).subscribe((res: any) => {
      this.movieList = res.results;
      this.movieList.forEach((el: any) => {
        const isAdded = fav.find((item: any) => el.title === item.title);
        if (isAdded) {
          el.favorite = true;
        }
      });
    });
  }

  goToOverview(movie: any) {
    this.router.navigate([`/overview/${movie.title}/${movie.id}`])
  }

  addToFavorites(movie: any) {
    this.favorites = localStorage.getItem('favorites');
    this.favorites = JSON.parse(this.favorites);
    
    if (this.favorites && this.favorites.length) {
      this.favorites.forEach((el: any, index: number) => {
        if (el.title === movie.title) {
          this.favorites.splice(index, 1);
          movie.favorite = false;
        } else {
          const fav = this.favorites.find((el: any) => el.title === movie.title);
          if (!fav) {
            this.favorites.push(movie);
          }
          movie.favorite = true;
        }
      });
    } else {
      movie.favorite = true;
      this.favorites.push(movie);
    }

    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
