import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRolePageComponent } from './admin-role-page.component';

describe('AdminRolePageComponent', () => {
  let component: AdminRolePageComponent;
  let fixture: ComponentFixture<AdminRolePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRolePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRolePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
