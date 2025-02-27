import { Component, input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showFiller = true;
  movie = '';
  baseImgUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
  favorites: any;
  public movie2$?: Observable<any>

  constructor(
    private movieService: MovieService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      this.movie = params['movie'];
    })
  }

  isFavorite(movie: string) {
    let fav: any = localStorage.getItem('favorites');
    fav = JSON.parse(fav);
    return fav.find((item: any) => movie === item.title) ? true : false;
  }

  search(event: any) {
    this.movie2$ = this.movieService.getMovieSearch(event);
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
