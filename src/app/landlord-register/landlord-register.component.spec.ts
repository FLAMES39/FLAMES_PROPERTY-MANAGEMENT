import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordRegisterComponent } from './landlord-register.component';

describe('LandlordRegisterComponent', () => {
  let component: LandlordRegisterComponent;
  let fixture: ComponentFixture<LandlordRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandlordRegisterComponent]
    });
    fixture = TestBed.createComponent(LandlordRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
