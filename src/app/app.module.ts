import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventThumbnail } from './event.thumbnail.component';
import { EventListComponent } from './eventlist.component';
import { EventService } from './service/event.service';

@NgModule({
  declarations: [
    AppComponent, EventListComponent, EventThumbnail
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
