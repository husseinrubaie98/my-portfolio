import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireMeSectionComponent } from './hire-me-section.component';

describe('HireMeSectionComponent', () => {
  let component: HireMeSectionComponent;
  let fixture: ComponentFixture<HireMeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HireMeSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireMeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
