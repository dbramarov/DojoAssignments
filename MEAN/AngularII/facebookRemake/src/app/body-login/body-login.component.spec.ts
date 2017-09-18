import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BodyLoginComponent } from './body-login.component';

describe('BodyLoginComponent', () => {
  let component: BodyLoginComponent;
  let fixture: ComponentFixture<BodyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyLoginComponent ],
      imports: [FormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
