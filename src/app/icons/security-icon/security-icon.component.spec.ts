import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityIconComponent } from './security-icon.component';

describe('SecurityIconComponent', () => {
  let component: SecurityIconComponent;
  let fixture: ComponentFixture<SecurityIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
