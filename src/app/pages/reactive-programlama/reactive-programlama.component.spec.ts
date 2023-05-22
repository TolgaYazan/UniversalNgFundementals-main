import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveProgramlamaComponent } from './reactive-programlama.component';

describe('ReactiveProgramlamaComponent', () => {
  let component: ReactiveProgramlamaComponent;
  let fixture: ComponentFixture<ReactiveProgramlamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveProgramlamaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveProgramlamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
