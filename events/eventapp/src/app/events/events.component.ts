import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from './event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events:Array<Event>=new Array<Event>();
  constructor(private _eventservice:EventService) { }

  ngOnInit() {
    this._eventservice.getEvents().subscribe(res=>this.events=res,err=>console.log(err))
  }

}
