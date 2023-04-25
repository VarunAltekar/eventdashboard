import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EventModel } from "../model/event.model";

@Injectable()
export class EventService{

    url = "assets/events.json";
    constructor( private http:HttpClient){}

    public getEvents_v1(){
        
        return this.http.get(this.url);
    }
}