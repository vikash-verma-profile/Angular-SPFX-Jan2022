import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demox-web-part',
  templateUrl: './demox-web-part.component.html',
  styleUrls: ['./demox-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DemoxWebPartComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
