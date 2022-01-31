import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoWebWebPartComponent } from './demo-web-web-part.component';

describe('DemoWebWebPartComponent', () => {
  let component: DemoWebWebPartComponent;
  let fixture: ComponentFixture<DemoWebWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoWebWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoWebWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
