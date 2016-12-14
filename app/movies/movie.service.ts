import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 


@Injectable()
export class MovieService {
    constructor(private http: Http) {}
    public getMovies(url: string): Observable<any>{
        return this.http.get(url).map(this.extractData)
    };
     private extractData(res: Response) {        
        let bod = res.json();
        return bod
     };
}