import {Component, OnInit} from '@angular/core';
import { EventService} from './shared/event.service';

import {ToastrService} from '../common/toastr.service';



@Component({
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
    <div class="col-md-5"  *ngFor = "let event of events">
      <event-thumbnail
        [event]=event
        [add] = add
        (click)="handleThumbnailClick(event.name)"
      ></event-thumbnail>
      </div>
    </div>

    <button class="btn btn-primary">CLick</button>
  </div>
  `
})
export class EventsListComponent implements OnInit {
  events: any[];
  add:string="Like!"

  constructor(private eventService: EventService, private toastr: ToastrService ){

  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

  ngOnInit(){
    this.events = this.eventService.getEvents();
  }


}
