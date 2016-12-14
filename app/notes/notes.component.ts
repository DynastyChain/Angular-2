import { Component, OnInit } from '@angular/core';
import { Note } from './notes';
import { NoteService } from './notes.service';

@Component({
    selector: 'my-notes',
    templateUrl: 'app/notes/notes.html',
    styleUrls: ['app/notes/notes.css']
}) 

export class NoteComponent implements OnInit{
    constructor(private noteService:NoteService) {}
    notes:Note[] = [];
    newNote:string;
    selectedNote:Note;
    ngOnInit(): void {
        this.getNotes();
        // console.log(this.notes)
    }
    getNotes(): void {
        this.noteService.getNotes().then((res) => this.notes = res.json());
    }
    createNote(c:string): void {
        this.noteService.createNote(c).then(() => this.getNotes());
    }
    updateNote(n:Note): void {
        this.noteService.updateNote(n).then(() => this.getNotes());
    }
    deleteNote(n:Note): void {
        this.noteService.deleteNote(n).then(() => this.getNotes());
    } 
    select(n:Note): void {
        this.selectedNote = n;
    }
}