import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustombillComponent } from './viewcustombill.component';

describe('ViewcustombillComponent', () => {
  let component: ViewcustombillComponent;
  let fixture: ComponentFixture<ViewcustombillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcustombillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustombillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
