import { TestBed } from '@angular/core/testing';

import { CustonValidationService } from './custon-validation.service';

describe('CustonValidationService', () => {
  let service: CustonValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustonValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
