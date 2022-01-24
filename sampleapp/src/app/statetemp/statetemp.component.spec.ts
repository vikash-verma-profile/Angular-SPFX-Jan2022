import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatetempComponent } from './statetemp.component';

describe('StatetempComponent', () => {
  let component: StatetempComponent;
  let fixture: ComponentFixture<StatetempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatetempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatetempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
