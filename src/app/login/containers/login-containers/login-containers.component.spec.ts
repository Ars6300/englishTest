import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContainersComponent } from './login-containers.component';

describe('LoginContainersComponent', () => {
  let component: LoginContainersComponent;
  let fixture: ComponentFixture<LoginContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginContainersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
