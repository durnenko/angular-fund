import {Component, OnInit} from '@angular/core';
import { EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import { ActivatedRoute} from '@angular/router';
import {IEvent} from './shared/index';



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
  events: IEvent;
  add:string="Like!"

  constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute ){

  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

  ngOnInit(){
    this.events = this.route.snapshot.data['events']
    };



}
