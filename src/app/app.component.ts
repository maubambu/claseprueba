import { Component } from '@angular/core';
import { MovieServiceService } from './movie-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private movieServiceService:MovieServiceService) {}

  ngOnInit() {
    this.movieServiceService.getMovies().subscribe(result => {
      this.movieList = result.json().results;
      console.log(this.movieList);
    });
  }

  holamundo: string = "Hola Mundo!";
  mostrar: boolean = false;
  arreglo: Array<string> = [
    "https://ia.media-imdb.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
    "https://ia.media-imdb.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "http://es.web.img3.acsta.net/c_215_290/medias/nmedia/18/82/04/81/19592828.jpg"
  ]

  movieList: Array<any> = [];


  adios() {
    this.holamundo = "";
    this.mostrar = true;
  }
}
