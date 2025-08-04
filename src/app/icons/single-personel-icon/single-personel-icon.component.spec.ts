import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePersonelIconComponent } from './single-personel-icon.component';

describe('SinglePersonelIconComponent', () => {
  let component: SinglePersonelIconComponent;
  let fixture: ComponentFixture<SinglePersonelIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePersonelIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePersonelIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
