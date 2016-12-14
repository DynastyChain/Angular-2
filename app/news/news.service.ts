import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NewsService {
    constructor(private http: Http) {}
    apiKey: 'd1d4eaa11dfe48999bf9e0a2127631d4';
    googleNews(): Promise<any> {
        var URL = 'https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=d1d4eaa11dfe48999bf9e0a2127631d4';
        return this.http.get(URL).toPromise().then((res) => res.json());
    }
}