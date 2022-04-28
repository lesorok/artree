import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingCommentComponent } from './creating-comment.component';

describe('CreatingCommentComponent', () => {
  let component: CreatingCommentComponent;
  let fixture: ComponentFixture<CreatingCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatingCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
