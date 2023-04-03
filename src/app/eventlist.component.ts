import { Component, NgModule } from "@angular/core";

@Component({
    selector: 'event-list',
    /*
    template: ` <div> 
                    <h1>Event List</h1> 
                    <h3>{{event.id}}</h3>
                    <h3>{{event.name}}</h3>
                </div>
                `
    */
    templateUrl: 'eventlist.html'            
})
export class EventListComponent{
    eventList={
        id:1,
        name:'VarunA'
    }
}