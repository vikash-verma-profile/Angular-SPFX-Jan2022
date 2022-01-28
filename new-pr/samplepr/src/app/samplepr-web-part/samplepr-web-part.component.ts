import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-samplepr-web-part',
  templateUrl: './samplepr-web-part.component.html',
  styleUrls: ['./samplepr-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SampleprWebPartComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
