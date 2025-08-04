import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublePersonelIconComponent } from './double-personel-icon.component';

describe('DoublePersonelIconComponent', () => {
  let component: DoublePersonelIconComponent;
  let fixture: ComponentFixture<DoublePersonelIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoublePersonelIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoublePersonelIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
