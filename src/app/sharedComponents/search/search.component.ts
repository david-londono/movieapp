import { Component, input, output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  public movie2$?: Observable<any>
  origin = input('');
  movie = '';
  outputSearch = output(); 

  constructor() {}

  search(event: any) {
    //this.movie2$ = this.movieService.getMovieSearch(event);
    if (this.origin() === 'home') {
      this.outputSearch.emit(event)
    }
  }

}
