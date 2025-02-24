import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public token = 'aec715c5444b1ddf73813f8138c5faf2';

  url = {
    search: 'https://api.themoviedb.org/3/search/movie',
    overview: 'https://api.themoviedb.org/3/movie/',
  }

  constructor(private http: HttpClient) { }

  getMovieSearch(movie: string) {
    return this.http.get(`${this.url.search}?api_key=${this.token}&query=${movie}`);
  }

  getMovieOverview(id: number) {
    return this.http.get<any>(`${this.url.overview}${id}?api_key=${this.token}`);
  }
}
