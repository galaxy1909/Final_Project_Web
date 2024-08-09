import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COrderComponent } from './corder.component';

describe('COrderComponent', () => {
  let component: COrderComponent;
  let fixture: ComponentFixture<COrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
