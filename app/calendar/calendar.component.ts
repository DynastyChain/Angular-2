import { Component, Output, EventEmitter } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';


@Component({
    selector: 'calendar',
    templateUrl: 'app/calendar/calendar.html',
    styleUrls: ['app/calendar/calendar.css']
})
export class CalendarComponent {     
  
  public dt:Date = new Date();
  public tt:Date = new Date();
  private minDate:Date = null;
  private events:Array<any>;
  private tomorrow:Date;
  private afterTomorrow:Date;
  private formats:Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
  private format = this.formats[0];
  private dateOptions:any = {
    formatYear: 'YY',
    startingDay: 1
  };
  private opened:boolean = false;

  public getDate():number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }

}