import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDisComponent } from './time-dis.component';

describe('TimeDisComponent', () => {
  let component: TimeDisComponent;
  let fixture: ComponentFixture<TimeDisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeDisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
