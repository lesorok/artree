import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEndingModeComponent } from './post-ending-mode.component';

describe('PostEndingModeComponent', () => {
  let component: PostEndingModeComponent;
  let fixture: ComponentFixture<PostEndingModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostEndingModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEndingModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
