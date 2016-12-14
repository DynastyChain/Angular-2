import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from './todos';
import { TodoService } from './todo.service';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import * as moment from 'moment'; 

@Component({
    selector: 'my-todos',
    templateUrl: 'app/todos/todos.html',
    styleUrls: ['app/todos/todo.css']
})

export class TodoComponent implements OnInit {

    constructor( private todoService: TodoService,
                 private router: Router ) {}
    
    // @ViewChild('childModal') public childModal:ModalDirective;
    
    mode: 'Observable';
    
    todos: Todo[];
    now:any;
    newTodoName: string;
    newTodoDue: Date = new Date();
    newTodoComment: string;
    newTodoPhone: number;
    tt:Date;
    selectedTodo: Todo;
    
    ngOnInit(): void {
        this.getTodos();        
    }
    public getTodos(): void {
        this.todoService.getTodos().then(res => this.todos = res)
        .then(() => this.sortTodos());
        
    }
    public createTodo(): void {
        this.hourAndMin(this.newTodoDue);       
        this.todoService.create(this.newTodoName, this.newTodoDue, this.newTodoComment)
        .then(() => this.getTodos()).then((res) => this.sortTodos());
        this.newTodoName = '';
        this.newTodoComment = '';
    }
    public updateTodo(t: Todo): void {
        this.hourAndMin(this.selectedTodo.due);
        this.todoService.update(this.selectedTodo)
        .then(() => this.getTodos()).then((res) => this.sortTodos());
    }
    public deleteTodo(todo: Todo): void {
            if(confirm('For Reals?')) {
                this.todoService.delete(todo)
                .then(() => this.getTodos()).then((res) => this.sortTodos())
            }
    }
    onSelect(t: Todo): void {
        this.selectedTodo = t;
        console.log(this.selectedTodo);
    }
    hourAndMin(d: Date):void {
        if(this.tt == undefined) {
            this.tt = new Date();
        }
        if(d == undefined) {
            d = new Date();
        }
        var h = this.tt.getHours();
        var m = this.tt.getMinutes();
        d.setHours(h);
        d.setMinutes(m);
    }
    isOverdue(td: any): boolean {
        this.now = moment();
        td = moment(td);
        if(this.now.isAfter(td)) {
            return true;
        }
        return false;
    }
    sortTodos(): any {
        this.todos.sort(function(a:any,b:any) { 
        var d1 = moment(a.due);
        var d2 = moment(b.due);
            if(d1.isBefore(d2)) {
                return -1;
            }
            if(d1.isAfter(d2)) {
                return 1;
            }
            });     
    }
}