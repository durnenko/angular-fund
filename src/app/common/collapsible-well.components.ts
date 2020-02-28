import { Component } from "@angular/core";
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'collapsible-well',
  template: `
  <div (click)="toggleContent()" class="well pointable">
    <h4 class="well-title">{{title}}</h4>
    // content here
  </div>
  `
})
export class Qweter {

}
