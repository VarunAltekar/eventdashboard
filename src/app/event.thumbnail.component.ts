import { Component, Input } from "@angular/core";
import { EventModel } from "./model/event.model";

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'eventthumbnail.html'
})
export class EventThumbnail{
 @Input() eventThumbnail!:EventModel;
}