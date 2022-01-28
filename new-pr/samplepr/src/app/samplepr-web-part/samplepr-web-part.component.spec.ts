import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleprWebPartComponent } from './samplepr-web-part.component';

describe('SampleprWebPartComponent', () => {
  let component: SampleprWebPartComponent;
  let fixture: ComponentFixture<SampleprWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleprWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleprWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
