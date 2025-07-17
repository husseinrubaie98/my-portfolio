import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubOutlineComponent } from './github-outline.component';

describe('GithubOutlineComponent', () => {
  let component: GithubOutlineComponent;
  let fixture: ComponentFixture<GithubOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubOutlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
