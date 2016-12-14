import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { MovieService } from './movie.service';
import { Movie } from './movie';

@Component({
    selector: 'movies',
    templateUrl: 'app/movies/movies.html',
    styleUrls: ['app/movies/movies.css']
}) 

export class MovieComponent {
    constructor(private http: Http, 
                private movieService: MovieService) {}
    mode: 'Observable';               
    movieTitle: string;
    movieUrl: string;
    movieData: void;
    buildUrl(): string {
        return this.movieUrl = 'http://www.omdbapi.com/?t='+this.movieTitle+'&y=&plot=short&r=json';
    };
    onSubmit(): void {
        var url: string = this.buildUrl();
        this.movieService.getMovies(url)
        .subscribe(res => this.movieData = res)
    }
}