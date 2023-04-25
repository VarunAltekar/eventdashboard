import { Component, NgModule, OnInit } from "@angular/core";

import { EventModel } from "./model/event.model";
import { EventService } from "./service/event.service";

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
    
    eventList!: EventModel;
    flag = false;
    
    constructor(private service:EventService){}
    
    getEventData(){
        this.service.getEvents_v1().
            subscribe({next: (value: any) => {
                
                this.eventList = {
                    id: value['id'],
                    name: value['name'],
                    date: value['date'],
                    time: value['time'],
                    price: value['price'],
                    imageUrl: value['imageUrl'],
                } 
                this.flag = true;                
            }})
    }
}