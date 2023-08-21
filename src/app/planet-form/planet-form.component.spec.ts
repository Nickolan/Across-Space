import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetFormComponent } from './planet-form.component';

describe('PlanetFormComponent', () => {
  let component: PlanetFormComponent;
  let fixture: ComponentFixture<PlanetFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetFormComponent]
    });
    fixture = TestBed.createComponent(PlanetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
