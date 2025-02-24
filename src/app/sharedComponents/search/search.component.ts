import { Component, output } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  public movie2$?: Observable<any>
  movie = '';
  outputSearch = output(); 

  constructor(private movieService: MovieService) {}

  search(event: any) {
    //this.movie2$ = this.movieService.getMovieSearch(event);
    this.outputSearch.emit(event)
  }

}
