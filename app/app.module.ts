import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { LocalStorageService } from 'angular-2-local-storage';

import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './base/app.component';
import { DashComponent } from './dashboard/dash.component';
import { TodoComponent } from './todos/todos.component';
import { TodoService } from './todos/todo.service';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { MovieComponent } from './movies/movies.component';
import { MovieService } from './movies/movie.service';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModalComponent } from './modal/modal.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NoteComponent } from './notes/notes.component';
import { NoteService } from './notes/notes.service';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather/weather.service';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news/news.service';

@NgModule({
  imports: [ BrowserModule, routing, HttpModule, FormsModule, Ng2BootstrapModule ],
  declarations: [ AppComponent, TodoComponent, TodoDetailComponent, DashComponent, MovieComponent, CalendarComponent, CalendarModalComponent, NoteComponent, WeatherComponent, NewsComponent ],
  providers: [MovieService, TodoService, NoteService, WeatherService, NewsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
