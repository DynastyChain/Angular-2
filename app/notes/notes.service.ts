import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Note } from './notes';

@Injectable()
export class NoteService {
    constructor(private http:Http) {}
    private noteUrl = 'http://localhost:3001/notes';
    private headers = new Headers({'Content-Type': 'application/json'});
    
    getNotes(): Promise<any> {
        var URL = this.noteUrl + '.json'
        return this.http.get(URL).toPromise().then((n) => n);
    }
    createNote(n: string): Promise<any> {
        var URL = this.noteUrl + '.json';
        return this.http.post(URL, {content: n}, {headers: this.headers}).toPromise();        
    }
    updateNote(n: Note): Promise<any> {
        var URL = `${this.noteUrl}/${n.id}.json`;
        return this.http.put(URL, {content: n.content}, {headers: this.headers}).toPromise();
    }
    deleteNote(n: Note): Promise<any> {
        var URL = `${this.noteUrl}/${n.id}.json`;
        return this.http.delete(URL).toPromise();
    }
}
