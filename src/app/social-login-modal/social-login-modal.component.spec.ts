import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLoginModalComponent } from './social-login-modal.component';

describe('SocialLoginModalComponent', () => {
  let component: SocialLoginModalComponent;
  let fixture: ComponentFixture<SocialLoginModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialLoginModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialLoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
