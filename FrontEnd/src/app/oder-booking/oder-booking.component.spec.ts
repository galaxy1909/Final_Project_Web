import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderBookingComponent } from './oder-booking.component';

describe('OderBookingComponent', () => {
  let component: OderBookingComponent;
  let fixture: ComponentFixture<OderBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OderBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OderBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
