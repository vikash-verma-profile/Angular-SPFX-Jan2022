import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleWebPartComponent } from './sample-web-part.component';

describe('SampleWebPartComponent', () => {
  let component: SampleWebPartComponent;
  let fixture: ComponentFixture<SampleWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
