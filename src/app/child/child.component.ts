import { Component, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['Pdata'],
  outputs:["childEvent"]
})
export class ChildComponent {
  childEvent = new EventEmitter;
  Pdata:any;
  onChange(val:any){
    this.childEvent.emit(val);
  }
}
