import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdminModeComponent } from './header-admin-mode.component';

describe('HeaderAdminModeComponent', () => {
  let component: HeaderAdminModeComponent;
  let fixture: ComponentFixture<HeaderAdminModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAdminModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAdminModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
