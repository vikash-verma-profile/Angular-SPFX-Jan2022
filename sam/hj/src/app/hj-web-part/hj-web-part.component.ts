import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hj-web-part',
  templateUrl: './hj-web-part.component.html',
  styleUrls: ['./hj-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HjWebPartComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
