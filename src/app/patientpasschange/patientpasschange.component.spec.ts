import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientpasschangeComponent } from './patientpasschange.component';

describe('PatientpasschangeComponent', () => {
  let component: PatientpasschangeComponent;
  let fixture: ComponentFixture<PatientpasschangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientpasschangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientpasschangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
