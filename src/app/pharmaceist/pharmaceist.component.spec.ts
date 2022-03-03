import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaceistComponent } from './pharmaceist.component';

describe('PharmaceistComponent', () => {
  let component: PharmaceistComponent;
  let fixture: ComponentFixture<PharmaceistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaceistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaceistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
