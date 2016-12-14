import { Component, Input } from '@angular/core';
import { Todo } from '../todos/todos';
import { TodoService } from '../todos/todo.service';


@Component({
    selector: 'todo-detail',
    templateUrl: 'app/todo-detail/todo-detail.html',
    styleUrls: ['app/todo-detail/todo-detail.css']
})

export class TodoDetailComponent {
  
    constructor(private todoService: TodoService) {}
    @Input()
    todo: Todo;
    tt:Date;
    updateTodo(): void {
         this.hourAndMin();                 
         this.todoService.update(this.todo);
                 
    }
    hourAndMin(): void {
        console.log(this.todo.due)
        if(this.tt == undefined) {
            this.tt = new Date();
            console.log('tt:' + this.tt);
        }        
        if(this.todo.due == undefined) {
            this.todo.due = new Date();
            console.log('todo:' + this.todo.due);
        }
        var h = this.tt.getHours();
        var m = this.tt.getMinutes();
        this.todo.due.setHours(h);
        this.todo.due.setMinutes(m);         
        console.log(this.tt,this.todo.due);
    }
}