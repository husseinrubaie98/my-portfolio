import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneHandleIconComponent } from './phone-handle-icon.component';

describe('PhoneHandleIconComponent', () => {
  let component: PhoneHandleIconComponent;
  let fixture: ComponentFixture<PhoneHandleIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneHandleIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneHandleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
