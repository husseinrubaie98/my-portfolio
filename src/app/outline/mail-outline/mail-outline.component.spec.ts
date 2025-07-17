import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailOutlineComponent } from './mail-outline.component';

describe('MailOutlineComponent', () => {
  let component: MailOutlineComponent;
  let fixture: ComponentFixture<MailOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailOutlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
