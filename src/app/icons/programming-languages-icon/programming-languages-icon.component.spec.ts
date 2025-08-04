import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingLanguagesIconComponent } from './programming-languages-icon.component';

describe('ProgrammingLanguagesIconComponent', () => {
  let component: ProgrammingLanguagesIconComponent;
  let fixture: ComponentFixture<ProgrammingLanguagesIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammingLanguagesIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingLanguagesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
