import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShieldIconComponent } from './shield-icon.component';

describe('ShieldIconComponent', () => {
  let component: ShieldIconComponent;
  let fixture: ComponentFixture<ShieldIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShieldIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShieldIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
