import { Component, Input } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'eventthumbnail.html'
})
export class EventThumbnail{
 @Input() eventThumbnail:any;
}