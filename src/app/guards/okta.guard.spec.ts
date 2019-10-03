import { TestBed, async, inject } from '@angular/core/testing';

import { OktaGuard } from './okta.guard';

describe('OktaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OktaGuard]
    });
  });

  it('should ...', inject([OktaGuard], (guard: OktaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
