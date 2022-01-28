import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sample-web-part',
  templateUrl: './sample-web-part.component.html',
  styleUrls: ['./sample-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SampleWebPartComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
