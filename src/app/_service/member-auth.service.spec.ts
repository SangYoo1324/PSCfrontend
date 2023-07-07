import { TestBed } from '@angular/core/testing';

import { MemberAuthService } from './member-auth.service';

describe('MemberAuthService', () => {
  let service: MemberAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
