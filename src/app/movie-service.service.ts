import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MovieServiceService {
  api_url = "https://api.themoviedb.org/3";
  api_key = "c569da86d32a37e34cf7d86e120d644c";
  api_image = 'https://image.tmdb.org/t/p/w500/';

  constructor(private http:Http) { }

  public getMovies() {
    return this.http.get(`${this.api_url}/discover/movie?api_key=${this.api_key}`)
  }

}
