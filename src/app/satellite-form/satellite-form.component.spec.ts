import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelliteFormComponent } from './satellite-form.component';

describe('SatelliteFormComponent', () => {
  let component: SatelliteFormComponent;
  let fixture: ComponentFixture<SatelliteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SatelliteFormComponent]
    });
    fixture = TestBed.createComponent(SatelliteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
