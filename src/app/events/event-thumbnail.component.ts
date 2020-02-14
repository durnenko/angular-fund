import {Component, Input} from "@angular/core"
import { EventEmitter } from 'protractor';

@Component({
  selector: 'event-thumbnail',
  template: `
  <div [routerLink]="['/events', event.id]"  class="well hoverwell thumbnail">
  <h2>{{ event.name}}</h2>
  <div>Date: {{event.date}}</div>
  <div [ngSwitch]="event.time" [ngClass]="getStartTimeClass()">
    Time: {{event.time}}
    <span *ngSwitchCase="'8:00 am'">Early Start</span>
    <span *ngSwitchCase="'10:00 am'">Late Start</span>
    <span *ngSwitchDefault>Normal Start</span>
  </div>

  <div>Price: \${{event.price}}</div>
  <div>
    <span>Location: {{event.location.address}}</span>
    <span>{{event.location.city}}, {{event.location.country}}</span><br>
    <span *ngIf="event.location.url">Online URL: {{event.location.url}}</span>
  </div>
</div>
  `,
  styles: [`
    .pad-left {margin-left: 10px;}
    .well div {color: #bbb; }
    .green {color: green!important;}
    .bold{font-weight: bold;}
  `]
})

export class EventThumbnailComponent {
 @Input() event:any
 @Input() add:string

 getStartTimeClass(){
   if(this.event && this.event.time === '8:00 am'){
    return {'green': true, 'bold': true}
   } else {
     return []
   }
 }

}
