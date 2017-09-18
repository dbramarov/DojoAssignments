import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HeaderLoginComponent } from './header-login.component';

describe('HeaderLoginComponent', () => {
  let component: HeaderLoginComponent;
  let fixture: ComponentFixture<HeaderLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLoginComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
