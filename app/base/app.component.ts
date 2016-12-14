import { Component, ViewContainerRef } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: 'app/base/app.html',
    styleUrls: ['app/base/app.css']    
})
export class AppComponent { 
    private viewContainerRef: ViewContainerRef;

    public constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
	}
}
