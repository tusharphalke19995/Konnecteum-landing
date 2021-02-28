import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivicypolicyComponent } from './privicypolicy.component';

describe('PrivicypolicyComponent', () => {
  let component: PrivicypolicyComponent;
  let fixture: ComponentFixture<PrivicypolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivicypolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivicypolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
