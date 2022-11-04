import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleIdComponent } from './vehicle-id.component';

describe('VehicleIdComponent', () => {
  let component: VehicleIdComponent;
  let fixture: ComponentFixture<VehicleIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
