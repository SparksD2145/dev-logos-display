import { TestBed, inject } from '@angular/core/testing';

import { LogolistService } from './logolist.service';

describe('LogolistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogolistService]
    });
  });

  it('should ...', inject([LogolistService], (service: LogolistService) => {
    expect(service).toBeTruthy();
  }));
});
