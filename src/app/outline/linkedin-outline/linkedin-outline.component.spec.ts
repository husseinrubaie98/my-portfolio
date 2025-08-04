import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinOutlineComponent } from './linkedin-outline.component';

describe('LinkedinOutlineComponent', () => {
  let component: LinkedinOutlineComponent;
  let fixture: ComponentFixture<LinkedinOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedinOutlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
