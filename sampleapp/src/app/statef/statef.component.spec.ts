import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefComponent } from './statef.component';

describe('StatefComponent', () => {
  let component: StatefComponent;
  let fixture: ComponentFixture<StatefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
