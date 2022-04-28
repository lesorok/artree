import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminModeComponent } from './dashboard-admin-mode.component';

describe('DashboardAdminModeComponent', () => {
  let component: DashboardAdminModeComponent;
  let fixture: ComponentFixture<DashboardAdminModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdminModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdminModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
