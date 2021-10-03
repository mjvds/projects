import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioButtonsComponent } from '../src/radio-buttons';

describe('RadioButtonsComponent', () => {
  let component: RadioButtonsComponent;
  let fixture: ComponentFixture<RadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render radio items', () => {
    component.items = [{
      label: 'first',
      value: 'first'
    }, {
      label: 'second',
      value: 'second'
    }];
  });

});
