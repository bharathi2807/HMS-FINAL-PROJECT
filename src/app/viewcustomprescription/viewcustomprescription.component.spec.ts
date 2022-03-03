import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustomprescriptionComponent } from './viewcustomprescription.component';

describe('ViewcustomprescriptionComponent', () => {
  let component: ViewcustomprescriptionComponent;
  let fixture: ComponentFixture<ViewcustomprescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcustomprescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustomprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
