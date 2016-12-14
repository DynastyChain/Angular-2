import { Observable } from 'rxjs//Observable';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Todo } from './todos'; 

@Injectable()
export class TodoService {
    constructor(private http: Http) {}
    private todoUrl = 'http://localhost:3001/todos';
    private headers = new Headers({'Content-Type': 'application/json'});

    public getTodos(): Promise<any> {
        return this.http.get('http://localhost:3001/todos.json').toPromise().then(res => res.json());
    }
    public create(name: string, due: Date, comments: string): Promise<any> {
        const URL = this.todoUrl + '.json';
        return this.http.post(URL, {name: name, due: due, comments: comments}, {headers: this.headers}).toPromise()
            .then(res => res.json());
    }
    public update(t: Todo): Promise<Todo> {
        const url = `${this.todoUrl}/${t.id}.json`;
        console.log(t.due);
        return this.http.put(url, {name: t.name, due: t.due, comments: t.comments}, {headers: this.headers})
            .toPromise().then(() => t);
    }
    public delete(t: Todo): Promise<Todo> {
        var Url = `${this.todoUrl}/${t.id}.json`;
        return this.http.delete(Url).toPromise()
            .then(() => t);
    }
    private extractData(res: Response) {
        var bod = res.json();
        return bod;
    }
}