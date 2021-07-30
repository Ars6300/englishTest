import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakingBlockComponent } from './speaking-block.component';

describe('SpeakingBlockComponent', () => {
  let component: SpeakingBlockComponent;
  let fixture: ComponentFixture<SpeakingBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakingBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
