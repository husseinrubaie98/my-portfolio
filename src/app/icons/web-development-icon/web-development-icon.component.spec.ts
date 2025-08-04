import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopmentIconComponent } from './web-development-icon.component';

describe('WebDevelopmentIconComponent', () => {
  let component: WebDevelopmentIconComponent;
  let fixture: ComponentFixture<WebDevelopmentIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebDevelopmentIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebDevelopmentIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
