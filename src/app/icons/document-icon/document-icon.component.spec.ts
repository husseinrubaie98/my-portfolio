import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentIconComponent } from './document-icon.component';

describe('DocumentIconComponent', () => {
  let component: DocumentIconComponent;
  let fixture: ComponentFixture<DocumentIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
