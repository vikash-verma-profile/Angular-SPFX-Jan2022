import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HjWebPartComponent } from './hj-web-part.component';

describe('HjWebPartComponent', () => {
  let component: HjWebPartComponent;
  let fixture: ComponentFixture<HjWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HjWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HjWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
