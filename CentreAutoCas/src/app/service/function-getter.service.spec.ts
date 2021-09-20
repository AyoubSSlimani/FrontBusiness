import { TestBed } from '@angular/core/testing';

import { FunctionGetterService } from './function-getter.service';

describe('FunctionGetterService', () => {
  let service: FunctionGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
