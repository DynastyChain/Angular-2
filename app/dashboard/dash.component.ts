import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { TodoService } from '../todos/todo.service';
import { Todo } from '../todos/todos';
import * as moment from 'moment'; 

@Component({
    selector: 'dash',
    templateUrl: 'app/dashboard/dash.html',
    styleUrls: ['app/dashboard/dash.css']
})
export class DashComponent {
    constructor(private todoService: TodoService) {}
    title = '';
    dueToday:Todo[] = [];
    dueTomorrow:Todo[] = [];
    dueAfterTomorrow:Todo[] = [];
    now:any;
    tomorrow:any;
    afterTomorrow:any;
    ngOnInit(): void {
        this.todoService.getTodos().then(res => this.sort(res))
             this.now = moment();
             this.tomorrow = moment(this.now).add(1,'d');
             this.afterTomorrow = moment(this.now).add(2,'d');
             this.title = this.now.format('dddd, MMMM Do');
    }
    sort(res:any): any {
        for(var i=0;i<res.length;i++) {
            var m = moment(res[i].due);            
            if(m.get('month') === this.now.get('month') && m.get('date') === this.now.get('date')) {
                this.dueToday.push(res[i]);
            }
            if(m.get('month') === this.tomorrow.get('month') && m.get('date') === this.tomorrow.get('date')) {
                this.dueTomorrow.push(res[i]);
            }
            if(m.get('month') === this.afterTomorrow.get('month') && m.get('date') === this.afterTomorrow.get('date')) {
                this.dueAfterTomorrow.push(res[i]);
            }
        }        
    }
    

}