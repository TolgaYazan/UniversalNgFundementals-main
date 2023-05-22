import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardPageComponent } from './user-card-page.component';

describe('UserCardPageComponent', () => {
  let component: UserCardPageComponent;
  let fixture: ComponentFixture<UserCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
