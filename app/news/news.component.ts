import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
@Component({
    selector: 'news',
    templateUrl: 'app/news/news.html',
    styleUrls: ['app/news/news.css']
})
export class NewsComponent implements OnInit {
    constructor(private newsService: NewsService) {}
    googleNewsData: any;
    ngOnInit(): void {
        this.googleNews();
    }
    googleNews(): void {
        this.newsService.googleNews().then((res) => this.googleNewsData = res.articles);
    }
    
}