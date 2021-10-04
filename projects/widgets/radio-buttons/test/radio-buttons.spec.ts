import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioButtonsComponent } from '../src/radio-buttons';

describe('RadioButtonsComponent', () => {
  let component: RadioButtonsComponent,
      fixture: ComponentFixture<RadioButtonsComponent>,
      debugElement: DebugElement;


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
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
