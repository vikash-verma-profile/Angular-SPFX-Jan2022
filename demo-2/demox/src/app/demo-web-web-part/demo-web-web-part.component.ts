import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo-web-web-part',
  templateUrl: './demo-web-web-part.component.html',
  styleUrls: ['./demo-web-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DemoWebWebPartComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
