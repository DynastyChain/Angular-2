import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
    selector: 'weather',
    templateUrl: 'app/weather/weather.html',
    styleUrls: ['app/weather/weather.css']
})
export class WeatherComponent implements OnInit {
    constructor(private weatherService:WeatherService) {}
    weather:any;
    forecast: any;
    threeDayData: any;
    ngOnInit(): void {
        this.getForecast();
        this.threeDay();
    }
    getForecast(): void {
        this.weatherService.forecast().subscribe(
            res => {
                this.forecast = res.list[0];
            });
    }
    threeDay(): void {
        this.weatherService.threeDay().subscribe(
            res => {
                this.threeDayData = res.list;
            }
        )
    }
}