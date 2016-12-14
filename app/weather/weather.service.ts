import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {
    constructor(private http:Http) {}
    apiKey:string = '5e9ef250989b51186c9e654ed5a968bf';
    baseURL:string = 'http://api.openweathermap.org/data/2.5/weather?q=';
    forecastURL:string = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
    getWeather(city:string): Promise<any> {
        var URL = `${this.baseURL}${city}&units=Imperial&appid=${this.apiKey}`;
        return this.http.get(URL).toPromise().then((res) => res.json()); 
    }
    forecast(): Observable<any> {
        var URL = 'http://api.openweathermap.org/data/2.5/forecast?q=Atlanta&units=Imperial&cnt=1&appid=5e9ef250989b51186c9e654ed5a968bf';
        return this.http.get(URL).map((res: Response) => res.json());
    }
    threeDay(): Observable<any> {
        var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily?id=4180439&units=imperial&cnt=3&appid=5e9ef250989b51186c9e654ed5a968bf'; 
        return this.http.get(URL).map((res: Response) => res.json());
    }
}
