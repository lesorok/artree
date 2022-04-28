import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAdminModeComponent } from './nav-admin-mode.component';

describe('NavAdminModeComponent', () => {
  let component: NavAdminModeComponent;
  let fixture: ComponentFixture<NavAdminModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAdminModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAdminModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
