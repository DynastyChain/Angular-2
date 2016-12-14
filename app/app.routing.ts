import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TodoComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { DashComponent } from './dashboard/dash.component';
import { MovieComponent } from './movies/movies.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NoteComponent } from './notes/notes.component';
import { WeatherComponent } from './weather/weather.component';
import { NewsComponent } from './news/news.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/todos', pathMatch: 'full' },
    { path: 'dash', component: DashComponent },
    { path: 'todos', component: TodoComponent },
    { path: 'todos/:id', component: TodoDetailComponent }, 
    { path: 'calendar', component: CalendarComponent },
    { path: 'movies', component: MovieComponent },
    { path: 'notes', component: NoteComponent },
    { path: 'weather', component: WeatherComponent },
    { path: 'news', component: NewsComponent }
    
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


