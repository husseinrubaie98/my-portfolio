import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugIconComponent } from './bug-icon.component';

describe('BugIconComponent', () => {
  let component: BugIconComponent;
  let fixture: ComponentFixture<BugIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BugIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BugIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
