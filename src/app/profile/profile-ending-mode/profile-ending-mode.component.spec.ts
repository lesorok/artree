import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEndingModeComponent } from './profile-ending-mode.component';

describe('ProfileEndingModeComponent', () => {
  let component: ProfileEndingModeComponent;
  let fixture: ComponentFixture<ProfileEndingModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEndingModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEndingModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
