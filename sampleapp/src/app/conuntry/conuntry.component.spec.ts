import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConuntryComponent } from './conuntry.component';

describe('ConuntryComponent', () => {
  let component: ConuntryComponent;
  let fixture: ComponentFixture<ConuntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConuntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConuntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
