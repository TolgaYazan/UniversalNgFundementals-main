import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockButtonComponent } from './block-button.component';

describe('BlockButtonComponent', () => {
  let component: BlockButtonComponent;
  let fixture: ComponentFixture<BlockButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
