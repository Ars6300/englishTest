import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCoachComponent } from './users-coach.component';

describe('UsersCoachComponent', () => {
  let component: UsersCoachComponent;
  let fixture: ComponentFixture<UsersCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
