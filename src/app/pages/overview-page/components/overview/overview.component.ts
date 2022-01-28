import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public movie: any;
  public movieList: any;
  public isAdded: any;
  public baseImgUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieList = localStorage.getItem('favorites');
    this.movieList = JSON.parse(this.movieList);
    this.route.paramMap.subscribe((params: any) => {
      this.movieService.getMovieOverview(params.get('movieId')).subscribe((res: any) => {
        this.movie = res;
        this.isAdded = this.movieList.find((el:any)=> el.title === this.movie.title);
        console.log('added',this.isAdded);
      })
    });
  }

  toggleFavorite(movie: any) {
    if (this.movieList && this.movieList.length) {
      this.movieList.forEach((el: any, index: number) => {
        if (el.title === movie.title) {
          this.movieList.splice(index, 1);
          this.isAdded = false;
        } else {
          const fav = this.movieList.find((el: any) => el.title === movie.title);
          if (!fav) {
            this.movieList.push(movie);
          }
          this.isAdded = true;
        }
      });
    } else {
      this.isAdded = true;
      this.movieList.push(movie);
    }

    localStorage.setItem('favorites', JSON.stringify(this.movieList));
  }
}
