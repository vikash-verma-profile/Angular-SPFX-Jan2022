import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoxWebPartComponent } from './demox-web-part.component';

describe('DemoxWebPartComponent', () => {
  let component: DemoxWebPartComponent;
  let fixture: ComponentFixture<DemoxWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoxWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoxWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
