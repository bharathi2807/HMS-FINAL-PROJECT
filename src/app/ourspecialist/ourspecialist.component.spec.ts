import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurspecialistComponent } from './ourspecialist.component';

describe('OurspecialistComponent', () => {
  let component: OurspecialistComponent;
  let fixture: ComponentFixture<OurspecialistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurspecialistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurspecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
